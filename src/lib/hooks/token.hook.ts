import { useQuery } from '@tanstack/react-query';
import { erc20Abi, getAddress, zeroAddress } from 'viem';
import {
  useAccount,
  useChainId,
  usePublicClient,
  useReadContract
} from 'wagmi';

import type { TUseQueryOptions } from '@lib/configs/react-query.config';

export const tokenQueryKeys = {
  balance: (
    tokenAddress: string | undefined,
    connectedAddress: string | undefined
  ) => ['token-balance', tokenAddress, connectedAddress],
  price: (address?: `0x${string}`) => ['token-price', address],
  decimals: (address?: `0x${string}`) => ['token-decimals', address],
  symbol: (address?: `0x${string}`) => ['token-symbol', address]
};

export const useTokenSymbol = (token: `0x${string}` | undefined) => {
  const publicClient = usePublicClient();

  const { data } = useQuery({
    queryKey: tokenQueryKeys.symbol(token),
    queryFn: async () => {
      if (!publicClient || !token) return null;

      return await publicClient.readContract({
        abi: erc20Abi,
        address: token,
        functionName: 'symbol'
      });
    }
  });

  return data || '';
};

export const useTokenDecimals = (token: `0x${string}` | undefined) => {
  const publicClient = usePublicClient();

  const { data } = useQuery({
    queryKey: tokenQueryKeys.decimals(token),
    queryFn: async () => {
      if (!publicClient || !token) return null;

      return await publicClient.readContract({
        abi: erc20Abi,
        address: token,
        functionName: 'decimals'
      });
    }
  });

  return data || 18;
};

export const useTokenApproval = (
  token: `0x${string}`,
  spender: `0x${string}`
) => {
  const account = useAccount();

  return useReadContract({
    address: token,
    functionName: 'allowance',
    abi: erc20Abi,
    args: [account.address || zeroAddress, spender]
  });
};

export const useTokenBalance = (tokenAddress: `0x${string}` | undefined) => {
  const { address: connectedAddress } = useAccount();
  const publicClient = usePublicClient();

  return useQuery({
    queryKey: tokenQueryKeys.balance(tokenAddress, connectedAddress),
    queryFn: async () => {
      if (!publicClient || !tokenAddress || !connectedAddress) return null;
      return await publicClient.readContract({
        abi: erc20Abi,
        address: tokenAddress,
        functionName: 'balanceOf',
        args: [connectedAddress]
      });
    },
    enabled: !!tokenAddress && !!connectedAddress && !!publicClient,
    refetchInterval: 15_000
  });
};

export const useAssetPrice = (
  address?: `0x${string}`,
  config?: TUseQueryOptions<number>
) => {
  const chainId = useChainId();

  return useQuery({
    ...config,
    queryKey: tokenQueryKeys.price(address),
    queryFn: async () => {
      if (!address) return 0;
      const response = await fetch(
        `https://app.euler.finance/api/v1/price?chainId=${chainId}&assets=${address}`
      );
      const data = await response.json();

      return data[getAddress(address)]?.price || 0;
    },
    enabled: !!address || !!config?.enabled,
    retry: false,
    refetchInterval:
      config?.refetchInterval !== undefined ? config.refetchInterval : 15000 // 15 seconds
  });
};
