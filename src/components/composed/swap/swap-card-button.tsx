import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useCallback, useMemo } from 'react';
import { erc20Abi, parseUnits } from 'viem';
import { useAccount } from 'wagmi';

import { Button } from '@ui/button';

import { useSwapData } from '@composed/swap/swap.store';

import { invalidateQueryKeys } from '@lib/configs/react-query.config';
import { useSwapV1PeripheryAddress } from '@lib/hooks/contracts.hook';
import { useTokenApproval } from '@lib/hooks/token.hook';
import { useTokenDecimals } from '@lib/hooks/token.hook';
import { useWriteContract } from '@lib/hooks/write-contract.hook';

type SwapCardButtonProps = {
  onSwap: () => void;
};
export function SwapCardButton({ onSwap }: SwapCardButtonProps) {
  const { isConnected, isConnecting } = useAccount();
  const {
    tokenTo,
    tokenFrom,
    fromAmount,
    quoteError,
    isCalculating,
    poolAddress
  } = useSwapData();
  const swapV1PeripheryAddress = useSwapV1PeripheryAddress();

  const { data: approval, queryKey: approvalQueryKey } = useTokenApproval(
    tokenFrom as `0x${string}`,
    swapV1PeripheryAddress as `0x${string}`
  );

  const fromDecimals = useTokenDecimals(tokenFrom || undefined);
  const buttonText = useMemo(() => {
    if (isCalculating) return 'Generating quote...';
    if (!tokenTo || !tokenFrom) return 'Select tokens';

    if (quoteError) return quoteError;
    if (!isConnected) return 'Connect wallet';
    if (isConnecting) return 'Connecting...';
    if (!fromAmount || Number(fromAmount) <= 0) return 'Enter amount';
    if ((approval || BigInt(0)) < parseUnits(fromAmount, fromDecimals))
      return 'Approve token';

    return 'Swap';
  }, [
    isCalculating,
    tokenTo,
    tokenFrom,
    quoteError,
    isConnected,
    isConnecting,
    fromAmount,
    approval,
    fromDecimals
  ]);

  const { writeContractAsync } = useWriteContract();

  const onClick = useCallback(async () => {
    if ((approval || BigInt(0)) < parseUnits(fromAmount, fromDecimals)) {
      await writeContractAsync({
        abi: erc20Abi,
        address: tokenFrom as `0x${string}`,
        functionName: 'approve',
        args: [swapV1PeripheryAddress, parseUnits(fromAmount, fromDecimals)]
      });

      invalidateQueryKeys(approvalQueryKey);
      return;
    }

    onSwap();
  }, [
    approval,
    approvalQueryKey,
    fromAmount,
    fromDecimals,
    onSwap,
    swapV1PeripheryAddress,
    tokenFrom,
    writeContractAsync
  ]);

  return (
    <>
      {isConnected && (
        <Button
          size='lg'
          className='w-full'
          onClick={onClick}
          disabled={Boolean(
            quoteError || !fromAmount || isCalculating || !poolAddress
          )}
        >
          {buttonText}
        </Button>
      )}
      {!isConnected && (
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <Button size='lg' className='w-full' onClick={openConnectModal}>
              {isConnecting ? 'Connecting...' : 'Connect wallet'}
            </Button>
          )}
        </ConnectButton.Custom>
      )}
    </>
  );
}
