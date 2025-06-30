import { useCallback, useEffect, useRef } from 'react';
import { BaseError, parseUnits } from 'viem';
import { formatUnits } from 'viem';
import { useAccount, usePublicClient } from 'wagmi';

import { useSwapActions, useSwapData } from '@composed/swap/swap.store';

import { EulerSwapPeripheryAbi } from '@lib/abis/euler-swap-periphery.abi';
import { EulerSwapAbi } from '@lib/abis/euler-swap.abi';
import { useEulerPoolsByPair } from '@lib/api/pools/euler-pools.hook';
import { sortTokenAddresses } from '@lib/crypto.utils';
import {
  useEVCAddress,
  useSwapV1PeripheryAddress
} from '@lib/hooks/contracts.hook';
import { useTokenBalance, useTokenDecimals } from '@lib/hooks/token.hook';
import { useWriteContract } from '@lib/hooks/write-contract.hook';

export const useSwapOperations = () => {
  const { address: connectedAddress } = useAccount();
  const {
    tokenFrom,
    tokenTo,
    fromAmount,
    slippage,
    isCalculating,
    poolAddress
  } = useSwapData();
  const { setToAmount, setQuoteError, setIsCalculating, setPoolAddress } =
    useSwapActions();

  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { data: fromBalance } = useTokenBalance(tokenFrom || undefined);
  const fromDecimals = useTokenDecimals(tokenFrom || undefined);
  const toDecimals = useTokenDecimals(tokenTo || undefined);
  const { getQuote } = useSwap();
  const [sortedToken0, sortedToken1] = sortTokenAddresses(
    tokenFrom || undefined,
    tokenTo || undefined
  );

  const { data: pools, isFetched } = useEulerPoolsByPair(
    sortedToken0,
    sortedToken1
  );

  useEffect(() => {
    if (isFetched && !pools?.length) {
      setQuoteError('No pools found');
      return;
    }
    if (poolAddress || !pools?.length) return;

    const pool = pools.sort((a, b) =>
      a.currentReserve0 + a.currentReserve1 >
      b.currentReserve0 + b.currentReserve1
        ? -1
        : 1
    )[0];

    setPoolAddress(pool.address);
  }, [
    pools,
    setToAmount,
    poolAddress,
    setPoolAddress,
    isFetched,
    setQuoteError
  ]);

  const calculateQuote = useCallback(
    async (amount: string) => {
      if (
        !tokenFrom ||
        !tokenTo ||
        !connectedAddress ||
        !amount ||
        fromDecimals === undefined
      ) {
        setToAmount('');
        return;
      }

      if (isNaN(parseFloat(amount))) {
        setToAmount('');
        setQuoteError('Invalid input');
        return;
      }

      const parsedAmount = parseFloat(amount);
      // Show error for zero or negative amount after debounce
      if (parsedAmount <= 0) {
        setToAmount('');
        setQuoteError('Amount must be greater than 0');
        return;
      }

      if (
        !fromBalance ||
        parseUnits(parsedAmount.toString(), fromDecimals) > fromBalance
      ) {
        setToAmount('');
        setQuoteError('Insufficient balance');
        return;
      }

      setIsCalculating(true);
      try {
        const quote = await getQuote(
          tokenFrom,
          tokenTo,
          parseUnits(amount, fromDecimals)
        );

        if (!quote) {
          setQuoteError('Quote calculation failed');
          return;
        }

        const outputAmount = formatUnits(BigInt(quote), toDecimals);
        setToAmount(outputAmount);
        setQuoteError('');
      } catch (e) {
        if (e instanceof BaseError) {
          setQuoteError(e.shortMessage);
        } else {
          setQuoteError('Quote calculation failed');
        }
        setToAmount('');
      } finally {
        setIsCalculating(false);
      }
    },
    [
      connectedAddress,
      fromBalance,
      fromDecimals,
      getQuote,
      setIsCalculating,
      setQuoteError,
      setToAmount,
      toDecimals,
      tokenFrom,
      tokenTo
    ]
  );
  const evcAddress = useEVCAddress();
  const { writeContractAsync } = useWriteContract();
  const swapV1PeripheryAddress = useSwapV1PeripheryAddress();

  const handleSwap = useCallback(async () => {
    if (!fromAmount || !tokenFrom || !tokenTo || !evcAddress || !poolAddress)
      return;

    const amount = parseUnits(fromAmount, fromDecimals);
    try {
      const quote = await getQuote(tokenFrom, tokenTo, amount);
      if (!quote) {
        setQuoteError('Quote calculation failed');
        return;
      }

      const amountOutMin =
        quote - (quote * BigInt(Math.floor(slippage * 10000))) / 10000n;

      await writeContractAsync({
        abi: EulerSwapPeripheryAbi,
        functionName: 'swapExactIn',
        address: swapV1PeripheryAddress as `0x${string}`,
        args: [
          poolAddress,
          tokenFrom,
          tokenTo,
          amount,
          connectedAddress,
          amountOutMin,
          0n
        ]
      });
    } catch (e) {
      if (e instanceof BaseError) {
        setQuoteError(e.shortMessage);
        return;
      }
      setQuoteError('Swap failed');
    }
  }, [
    fromAmount,
    tokenFrom,
    tokenTo,
    evcAddress,
    poolAddress,
    fromDecimals,
    getQuote,
    slippage,
    writeContractAsync,
    swapV1PeripheryAddress,
    connectedAddress,
    setQuoteError
  ]);

  const handleRefreshQuote = useCallback(() => {
    if (!fromAmount || !tokenFrom || !tokenTo) return;

    if (refreshTimerRef.current) {
      clearTimeout(refreshTimerRef.current);
    }

    calculateQuote(fromAmount);

    refreshTimerRef.current = setTimeout(
      () => {
        handleRefreshQuote();
      },
      15 * 60 * 1000
    );
  }, [fromAmount, tokenFrom, tokenTo, calculateQuote]);

  useEffect(() => {
    if (fromAmount && tokenFrom && tokenTo && !isCalculating) {
      refreshTimerRef.current = setTimeout(() => {
        handleRefreshQuote();
      }, 15000);
    }

    return () => {
      if (refreshTimerRef.current) {
        clearTimeout(refreshTimerRef.current);
      }
    };
  }, [tokenFrom, tokenTo, handleRefreshQuote, fromAmount, isCalculating]);

  useEffect(() => {
    if (!fromAmount || !tokenFrom || !tokenTo) {
      setToAmount('');
      setQuoteError('');
      return;
    }

    const debounceTimer = setTimeout(() => {
      calculateQuote(fromAmount);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [
    fromAmount,
    tokenFrom,
    tokenTo,
    calculateQuote,
    setToAmount,
    setQuoteError
  ]);

  return {
    handleSwap,
    calculateQuote
  };
};

export const useSwap = () => {
  const publicClient = usePublicClient();
  const { poolAddress } = useSwapData();

  const getQuote = useCallback(
    async (
      tokenFrom: `0x${string}`,
      tokenTo: `0x${string}`,
      amount: bigint
    ): Promise<bigint | null> => {
      if (!publicClient || !poolAddress) return null;

      return await publicClient.readContract({
        abi: EulerSwapAbi,
        functionName: 'computeQuote',
        address: poolAddress,
        args: [tokenFrom, tokenTo, amount, true]
      });
    },
    [poolAddress, publicClient]
  );

  return {
    getQuote
  };
};
