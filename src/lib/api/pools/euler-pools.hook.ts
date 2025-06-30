import { useQuery } from '@tanstack/react-query';
import { decodeEventLog } from 'viem';
import { usePublicClient } from 'wagmi';
import { useChainId } from 'wagmi';

import { isSwapEvent } from '@composed/pools/pool.utils';

import { EulerSwapFactoryAbi } from '@lib/abis/euler-swap-factory.abi';
import { EulerSwapAbi } from '@lib/abis/euler-swap.abi';
import type {
  EulerPoolDetail,
  EulerPoolSwapInfo
} from '@lib/api/pools/euler-pools.type';
import type { TUseQueryOptions } from '@lib/configs/react-query.config';
import { useSwapV1FactoryAddress } from '@lib/hooks/contracts.hook';

export const eulerPoolsQueryKeys = {
  pools: (chainId?: number) => ['asset-pools-details', chainId],
  poolsByPair: (
    token0?: `0x${string}`,
    token1?: `0x${string}`,
    chainId?: number
  ) => ['asset-pools-details', token0, token1, chainId]
} as const;

export const useEulerPoolsByPair = (
  token0?: `0x${string}`,
  token1?: `0x${string}`,
  config?: TUseQueryOptions<EulerPoolDetail[]>
) => {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const swapV1FactoryAddress = useSwapV1FactoryAddress();

  return useQuery({
    queryKey: eulerPoolsQueryKeys.poolsByPair(token0, token1, chainId),
    queryFn: async (): Promise<EulerPoolDetail[]> => {
      if (!publicClient || !swapV1FactoryAddress) return [];

      const assetPools = await publicClient.readContract({
        abi: EulerSwapFactoryAbi,
        functionName: 'poolsByPair',
        args: [token0 as `0x${string}`, token1 as `0x${string}`],
        address: swapV1FactoryAddress
      });

      const poolDetails: (EulerPoolDetail | null)[] = await Promise.all(
        assetPools.map(async (poolAddress) => {
          try {
            const [params, reserves, assets] = await Promise.all([
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getParams'
              }),
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getReserves'
              }),
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getAssets'
              })
            ]);

            return {
              ...params,
              address: poolAddress,
              asset0: assets[0],
              asset1: assets[1],
              currentReserve0: reserves[0],
              currentReserve1: reserves[1],
              lastUpdateTimestamp: reserves[2]
            };
          } catch {
            return null;
          }
        })
      );

      return poolDetails.filter(
        (pool): pool is EulerPoolDetail => pool !== null
      );
    },
    ...config,
    enabled:
      !!publicClient &&
      !!token0 &&
      !!token1 &&
      config?.enabled !== false &&
      !!swapV1FactoryAddress
  });
};

export const useEulerSwapPools = (
  config?: TUseQueryOptions<EulerPoolDetail[]>
) => {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const swapV1FactoryAddress = useSwapV1FactoryAddress();

  return useQuery({
    queryKey: eulerPoolsQueryKeys.pools(chainId),
    queryFn: async (): Promise<EulerPoolDetail[]> => {
      if (!publicClient || !swapV1FactoryAddress) return [];

      const assetPools = await publicClient.readContract({
        abi: EulerSwapFactoryAbi,
        functionName: 'pools',
        args: [],
        address: swapV1FactoryAddress
      });

      const poolDetails: (EulerPoolDetail | null)[] = await Promise.all(
        assetPools.map(async (poolAddress) => {
          try {
            const [params, reserves, assets] = await Promise.all([
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getParams'
              }),
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getReserves'
              }),
              publicClient.readContract({
                abi: EulerSwapAbi,
                address: poolAddress,
                functionName: 'getAssets'
              })
            ]);

            return {
              ...params,
              address: poolAddress,
              asset0: assets[0],
              asset1: assets[1],
              currentReserve0: reserves[0],
              currentReserve1: reserves[1],
              lastUpdateTimestamp: reserves[2]
            };
          } catch {
            return null;
          }
        })
      );

      return poolDetails.filter(
        (pool): pool is EulerPoolDetail => pool !== null
      );
    },
    ...config,
    enabled:
      !!publicClient && config?.enabled !== false && !!swapV1FactoryAddress
  });
};

export const useEulerPools = (
  token0?: `0x${string}`,
  token1?: `0x${string}`,
  config?: TUseQueryOptions<EulerPoolDetail[]>
) => {
  const poolsByPair = useEulerPoolsByPair(token0, token1, config);
  const pools = useEulerSwapPools(config);

  if (token0 && token1) {
    return poolsByPair;
  }

  return pools;
};

export const usePoolSwapInfo = (
  poolAddress?: `0x${string}`,
  config?: TUseQueryOptions<EulerPoolSwapInfo[]>
) => {
  const chainId = useChainId();
  const publicClient = usePublicClient();

  return useQuery<EulerPoolSwapInfo[], unknown>({
    queryKey: ['poolSwapEvents', poolAddress, chainId],
    queryFn: async () => {
      const logs = await publicClient?.getLogs({
        address: poolAddress,
        toBlock: 'latest',
        fromBlock: 0n
      });

      const swapLogs = [];
      for (const log of logs ?? []) {
        const decodedLog = decodeEventLog({
          abi: EulerSwapAbi,
          data: log.data,
          topics: log.topics
        });

        if (isSwapEvent(decodedLog)) {
          const decodedLogData: EulerPoolSwapInfo = {
            ...decodedLog.args,
            blockNumber: log.blockNumber,
            transactionHash: log.transactionHash
          };
          swapLogs.push(decodedLogData);
        }
      }

      return swapLogs;
    },
    ...config,
    enabled: Boolean(publicClient) && !!poolAddress && config?.enabled !== false
  });
};
