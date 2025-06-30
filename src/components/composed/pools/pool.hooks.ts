import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo } from 'react';
import { encodeFunctionData, formatUnits, parseUnits, zeroAddress } from 'viem';
import {
  useAccount,
  useChainId,
  usePublicClient,
  useReadContract
} from 'wagmi';

import {
  type PoolParams,
  usePoolActions,
  usePoolAddress,
  usePoolAssets,
  usePoolCurrentReserve,
  usePoolParamActions,
  usePoolParams,
  usePoolStore,
  useVault0Store,
  useVault1Store
} from '@composed/pools/pool.store';
import type { PoolData } from '@composed/pools/pool.type';
import {
  findEquilibriumPoint,
  predictPoolAddress
} from '@composed/pools/pool.utils';

import { EulerSwapFactoryAbi } from '@lib/abis/euler-swap-factory.abi';
import { EulerSwapAbi } from '@lib/abis/euler-swap.abi';
import { EvcAbi } from '@lib/abis/evc.abi';
import {
  eulerAccountVaultPositionsQuery,
  eulerVaultsByAssetQuery
} from '@lib/api/euler.gql';
import { useVaultAddressBalance } from '@lib/api/vaults/vault.hook';
import type { BatchItem } from '@lib/api/vaults/vault.types';
import { sortVaultsByBalance } from '@lib/api/vaults/vault.util';
import { useGraphql } from '@lib/configs/graphql.config';
import type { TUseQueryOptions } from '@lib/configs/react-query.config';
import { useEVCAddress } from '@lib/hooks/contracts.hook';
import { useSwapV1FactoryAddress } from '@lib/hooks/contracts.hook';
import { useAssetPrice, useTokenDecimals } from '@lib/hooks/token.hook';
import { useWriteContract } from '@lib/hooks/write-contract.hook';

export const poolQueryKeys = {
  list: (chainId: number) => ['euler-pools', chainId]
};

export const usePoolDeployment = () => {
  const { address: connectedAddress } = useAccount();
  const params = usePoolParams();
  const { asset0, asset1 } = usePoolAssets();
  const poolAddress = usePoolAddress();
  const evcAddress = useEVCAddress();
  const publicClient = usePublicClient();
  const swapV1FactoryAddress = useSwapV1FactoryAddress();
  const { writeContractAsync } = useWriteContract();

  const error = useMemo(() => {
    if (!params.vault0 || !params.vault1 || !params.eulerAccount) {
      return 'Missing parameters';
    }

    if (params.eulerAccount !== connectedAddress) {
      return 'Not authorized';
    }
  }, [connectedAddress, params.eulerAccount, params.vault0, params.vault1]);

  const getValidParams = useCallback((): PoolParams | null => {
    if (
      !asset0 ||
      !asset1 ||
      !params.vault0 ||
      !params.vault1 ||
      !params.eulerAccount ||
      typeof params.fee !== 'bigint' ||
      typeof params.protocolFee !== 'bigint' ||
      !params.protocolFeeRecipient ||
      typeof params.concentrationX !== 'bigint' ||
      typeof params.concentrationY !== 'bigint' ||
      !params.priceX ||
      !params.priceY ||
      typeof params.equilibriumReserve0 !== 'bigint' ||
      typeof params.equilibriumReserve1 !== 'bigint'
    ) {
      return null;
    }

    const payload: PoolParams = {
      vault0: params.vault0,
      vault1: params.vault1,
      eulerAccount: params.eulerAccount,

      concentrationX: params.concentrationX,
      concentrationY: params.concentrationY,
      priceX: params.priceX,
      priceY: params.priceY,
      equilibriumReserve0: params.equilibriumReserve0,
      equilibriumReserve1: params.equilibriumReserve1,

      fee: params.fee,
      protocolFee: params.protocolFee,
      protocolFeeRecipient: params.protocolFeeRecipient
    };

    return payload;
  }, [asset0, asset1, params]);

  const getValidBatchItemParams = useCallback(() => {
    const params = getValidParams();
    if (!params || !asset0 || !asset1) return null;

    // Contract requirement: require(asset0Addr < asset1Addr, AssetsOutOfOrderOrEqual());
    const isValid = asset0 < asset1;
    if (!isValid) {
      const swappedParams: PoolParams = {
        vault0: params.vault1,
        vault1: params.vault0,
        eulerAccount: params.eulerAccount,

        concentrationX: params.concentrationY,
        concentrationY: params.concentrationX,
        priceX: params.priceY,
        priceY: params.priceX,
        equilibriumReserve0: params.equilibriumReserve1,
        equilibriumReserve1: params.equilibriumReserve0,

        fee: params.fee,
        protocolFee: params.protocolFee,
        protocolFeeRecipient: params.protocolFeeRecipient
      };

      return {
        params: swappedParams,
        currentReserve0: params.equilibriumReserve1,
        currentReserve1: params.equilibriumReserve0
      };
    }

    return {
      params,
      currentReserve0: params.equilibriumReserve0,
      currentReserve1: params.equilibriumReserve1
    };
  }, [asset0, asset1, getValidParams]);

  const getDeployPoolBatchItems = useCallback(async (): Promise<
    BatchItem[] | null
  > => {
    if (!publicClient || !swapV1FactoryAddress || !evcAddress) return null;
    const validParams = getValidBatchItemParams();
    if (!validParams) return null;

    const [poolAddress, salt] = await predictPoolAddress(
      publicClient,
      swapV1FactoryAddress,
      validParams.params
    );

    return [
      {
        onBehalfOfAccount: zeroAddress,
        targetContract: evcAddress,
        value: 0n,
        data: encodeFunctionData({
          abi: EvcAbi,
          functionName: 'setAccountOperator',
          args: [validParams.params.eulerAccount, poolAddress, true]
        })
      },
      {
        onBehalfOfAccount: validParams.params.eulerAccount,
        targetContract: swapV1FactoryAddress,
        value: 0n,
        data: encodeFunctionData({
          abi: EulerSwapFactoryAbi,
          functionName: 'deployPool',
          args: [
            validParams.params,
            {
              currReserve0: validParams.currentReserve0,
              currReserve1: validParams.currentReserve1
            },
            salt
          ]
        })
      }
    ];
  }, [evcAddress, getValidBatchItemParams, publicClient, swapV1FactoryAddress]);

  const getEditPoolBatchItems = useCallback(async (): Promise<
    BatchItem[] | null
  > => {
    if (!publicClient || !swapV1FactoryAddress || !poolAddress) return null;
    const validParams = getValidBatchItemParams();
    if (!validParams) return null;

    const deployBatchItems = await getDeployPoolBatchItems();
    if (!deployBatchItems) return null;
    return [
      {
        onBehalfOfAccount: zeroAddress,
        targetContract: evcAddress as `0x${string}`,
        value: 0n,
        data: encodeFunctionData({
          abi: EvcAbi,
          functionName: 'setAccountOperator',
          args: [validParams.params.eulerAccount, poolAddress, false]
        })
      },
      {
        onBehalfOfAccount: validParams.params.eulerAccount,
        targetContract: swapV1FactoryAddress,
        value: 0n,
        data: encodeFunctionData({
          abi: EulerSwapFactoryAbi,
          functionName: 'uninstallPool',
          args: []
        })
      },
      ...deployBatchItems
    ];
  }, [
    evcAddress,
    getDeployPoolBatchItems,
    getValidBatchItemParams,
    poolAddress,
    publicClient,
    swapV1FactoryAddress
  ]);

  const writePoolBatchTx = useCallback(
    async (batchItems: BatchItem[]) => {
      if (!evcAddress || !connectedAddress) return null;

      return await writeContractAsync({
        address: evcAddress as `0x${string}`,
        abi: EvcAbi,
        functionName: 'batch',
        args: [batchItems]
      });
    },
    [connectedAddress, evcAddress, writeContractAsync]
  );

  const estimatePoolGasFees = useCallback(
    async (batchItems: BatchItem[]) => {
      if (!publicClient) return null;

      return await publicClient.estimateContractGas({
        account: connectedAddress,
        address: evcAddress as `0x${string}`,
        abi: EvcAbi,
        functionName: 'batch',
        args: [batchItems]
      });
    },
    [connectedAddress, evcAddress, publicClient]
  );

  return {
    error,
    getValidParams,
    getDeployPoolBatchItems,
    getEditPoolBatchItems,
    writePoolBatchTx,
    estimatePoolGasFees
  };
};

export const usePoolVaultDataSync = (
  assetAddress: `0x${string}` | null,
  vaultAddress: `0x${string}` | null,
  setVault: (vaultAddress: `0x${string}` | null) => void
) => {
  const { address: connectedAddress } = useAccount();

  const { data: vaults } = useGraphql(eulerVaultsByAssetQuery, {
    asset: assetAddress
  });

  const { data: accountVaultPositions } = useGraphql(
    eulerAccountVaultPositionsQuery,
    {
      account: connectedAddress
    },
    {
      enabled: !!connectedAddress,
      refetchInterval: 1000 * 60 * 5
    }
  );

  const vaultsWithBalance = useMemo(
    () =>
      sortVaultsByBalance(
        accountVaultPositions?.trackingVaultBalances,
        vaults?.eulerVaults
      ),
    [accountVaultPositions, vaults]
  );

  useEffect(() => {
    if (!vaultAddress && vaultsWithBalance.length > 0) {
      setVault(vaultsWithBalance[0]?.id);
    }
  }, [setVault, vaultAddress, vaultsWithBalance]);
};

export const usePoolVault0DataSync = () => {
  const { vault0, asset0, setVault0 } = useVault0Store();

  usePoolVaultDataSync(asset0, vault0, setVault0);
};

export const usePoolVault1DataSync = () => {
  const { vault1, asset1, setVault1 } = useVault1Store();

  usePoolVaultDataSync(asset1, vault1, setVault1);
};

export const usePoolPriceRatioSync = () => {
  const { asset0 } = useVault0Store();
  const { asset1 } = useVault1Store();
  const { priceX, priceY } = usePoolParams();
  const { setPoolParam } = usePoolParamActions();
  const { data: asset0Price } = useAssetPrice(asset0 || undefined);
  const { data: asset1Price } = useAssetPrice(asset1 || undefined);

  useEffect(() => {
    if (priceX !== null && priceY !== null) return;
    if (asset0Price && asset1Price && asset0Price > 0 && asset1Price > 0) {
      const SCALING_FACTOR = 1e18;
      const priceX = BigInt(Math.round(asset0Price * SCALING_FACTOR));
      const priceY = BigInt(Math.round(asset1Price * SCALING_FACTOR));

      setPoolParam('priceX', priceX);
      setPoolParam('priceY', priceY);
    }
  }, [asset0Price, asset1Price, priceX, priceY, setPoolParam]);
};

export const usePoolEulerAccountSync = () => {
  const { setPoolParam } = usePoolParamActions();
  const { eulerAccount } = usePoolParams();
  const { address: connectedAddress } = useAccount();

  useEffect(() => {
    if (connectedAddress && eulerAccount === null) {
      setPoolParam('eulerAccount', connectedAddress);
    }
  }, [connectedAddress, eulerAccount, setPoolParam]);
};

export const usePoolProtocolFeeSync = () => {
  const swapV1FactoryAddress = useSwapV1FactoryAddress();
  const { setPoolParam } = usePoolParamActions();

  const { data: protocolFee } = useReadContract({
    abi: EulerSwapFactoryAbi,
    address: swapV1FactoryAddress,
    functionName: 'protocolFee'
  });

  const { data: protocolFeeRecipient } = useReadContract({
    abi: EulerSwapFactoryAbi,
    address: swapV1FactoryAddress,
    functionName: 'protocolFeeRecipient'
  });

  useEffect(() => {
    if (typeof protocolFee === 'bigint') {
      setPoolParam('protocolFee', protocolFee);
    }
  }, [protocolFee, setPoolParam]);

  useEffect(() => {
    if (protocolFeeRecipient) {
      setPoolParam('protocolFeeRecipient', protocolFeeRecipient);
    }
  }, [protocolFeeRecipient, setPoolParam]);
};

export const usePoolCurrentReserveSync = () => {
  const {
    currentReserve0,
    currentReserve1,
    setCurrentReserve0,
    setCurrentReserve1
  } = usePoolCurrentReserve();
  const { priceX, priceY, concentrationX, concentrationY } = usePoolParams();
  const { setPoolParam } = usePoolParamActions();
  const { lastChangedAmount } = usePoolStore();
  const { vault0, amount0, asset0, setAmount0 } = useVault0Store();
  const { vault1, asset1, setAmount1, amount1 } = useVault1Store();
  const asset0Decimals = useTokenDecimals(asset0 || undefined);
  const asset1Decimals = useTokenDecimals(asset1 || undefined);

  const { balance: asset0Balance } = useVaultAddressBalance(vault0);
  const { balance: asset1Balance } = useVaultAddressBalance(vault1);

  useEffect(() => {
    setCurrentReserve0(asset0Balance);
    setAmount0(formatUnits(asset0Balance, Number(asset0Decimals)));
    setCurrentReserve1(asset1Balance);
  }, [
    asset0Balance,
    asset0Decimals,
    asset1Balance,
    setAmount0,
    setCurrentReserve0,
    setCurrentReserve1
  ]);

  useEffect(() => {
    if (
      priceX === null ||
      priceY === null ||
      concentrationX === null ||
      concentrationY === null ||
      currentReserve0 === null ||
      currentReserve1 === null
    )
      return;

    try {
      if (lastChangedAmount === 'amount0' || lastChangedAmount === null) {
        const eqPoint = findEquilibriumPoint(
          parseUnits(amount0, Number(asset0Decimals)), //10000000n (10)
          true,
          true,
          currentReserve0, // 1000100n (1.0001)
          currentReserve1, // 995715n (0.995715)
          priceX, // 1000000000000000000n (1)
          priceY, // 1000358290000000128n (1.00035829)
          concentrationX, // 200000000000000000n (0.2)
          concentrationY // 200000000000000000n (0.2)
        );

        setAmount1(formatUnits(eqPoint, Number(asset1Decimals)));
        setPoolParam(
          'equilibriumReserve0',
          parseUnits(amount0, Number(asset0Decimals))
        );
        setPoolParam('equilibriumReserve1', eqPoint);
      }

      if (lastChangedAmount === 'amount1') {
        const eqPoint = findEquilibriumPoint(
          parseUnits(amount1, Number(asset1Decimals)),
          true,
          false,
          currentReserve0,
          currentReserve1,
          priceX,
          priceY,
          concentrationX,
          concentrationY
        );

        setAmount0(formatUnits(eqPoint, Number(asset0Decimals)));
        setPoolParam(
          'equilibriumReserve0',
          parseUnits(amount0, Number(asset0Decimals))
        );
        setPoolParam('equilibriumReserve1', eqPoint);
      }
    } catch {}
  }, [
    amount0,
    amount1,
    asset0Decimals,
    asset1Decimals,
    concentrationX,
    concentrationY,
    currentReserve0,
    currentReserve1,
    lastChangedAmount,
    priceX,
    priceY,
    setAmount0,
    setAmount1,
    setPoolParam
  ]);
};

export const usePoolList = (
  options?: TUseQueryOptions<PoolData[], unknown>
) => {
  const chainId = useChainId();

  return useQuery<PoolData[], unknown>({
    queryKey: poolQueryKeys.list(chainId),
    queryFn: async (): Promise<PoolData[]> => {
      const url = new URL('https://lambdaswap-api.vercel.app/api/pools');
      url.searchParams.append('chainId', String(chainId));

      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    ...options
  });
};

export const useCurrentAddressPool = () => {
  const { address: connectedAddress } = useAccount();
  const swapV1FactoryAddress = useSwapV1FactoryAddress();

  return useReadContract({
    abi: EulerSwapFactoryAbi,
    address: swapV1FactoryAddress,
    functionName: 'poolByEulerAccount',
    args: [connectedAddress || zeroAddress]
  });
};

export const useEulerSwapInit = () => {
  const {
    setPoolParams,
    setPoolAddress,
    setCurrentReserve0,
    setCurrentReserve1,
    setAsset0,
    setAsset1,
    setAmount0,
    setAmount1
  } = usePoolActions();
  const { asset0 } = useVault0Store();
  const { asset1 } = useVault1Store();
  const { data: poolAddress, isFetched } = useCurrentAddressPool();
  const { isLoading, data } = useReadContract({
    address: poolAddress,
    abi: EulerSwapAbi,
    functionName: 'getParams'
  });

  const { isLoading: reservesLoading, data: reservesData } = useReadContract({
    address: poolAddress,
    abi: EulerSwapAbi,
    functionName: 'getReserves'
  });

  const { isLoading: assetsLoading, data: assetsData } = useReadContract({
    address: poolAddress,
    abi: EulerSwapAbi,
    functionName: 'getAssets'
  });

  const asset0Decimals = useTokenDecimals(asset0 || undefined);
  const asset1Decimals = useTokenDecimals(asset1 || undefined);

  usePoolVault0DataSync();
  usePoolVault1DataSync();
  usePoolPriceRatioSync();
  usePoolCurrentReserveSync();
  usePoolProtocolFeeSync();
  usePoolEulerAccountSync();

  useEffect(() => {
    if (data && poolAddress) {
      setPoolAddress(poolAddress);
      setPoolParams(data);
    }
  }, [data, poolAddress, setPoolAddress, setPoolParams]);

  useEffect(() => {
    if (reservesData) {
      setCurrentReserve0(reservesData[0]);
      setCurrentReserve1(reservesData[1]);

      setAmount0(formatUnits(reservesData[0], Number(asset0Decimals)));
      setAmount1(formatUnits(reservesData[1], Number(asset1Decimals)));
    }
  }, [
    asset0Decimals,
    asset1Decimals,
    reservesData,
    setAmount0,
    setAmount1,
    setCurrentReserve0,
    setCurrentReserve1
  ]);

  useEffect(() => {
    if (assetsData?.length) {
      setAsset0(assetsData[0]);
      setAsset1(assetsData[1]);
    }
  }, [assetsData, setAsset0, setAsset1]);

  return useMemo(
    () => ({
      isLoading: (isFetched && isLoading) || reservesLoading || assetsLoading,
      data: {
        ...data,
        poolAddress,
        reserve0: reservesData?.[0],
        reserve1: reservesData?.[1]
      }
    }),
    [
      isFetched,
      isLoading,
      reservesLoading,
      assetsLoading,
      data,
      poolAddress,
      reservesData
    ]
  );
};
