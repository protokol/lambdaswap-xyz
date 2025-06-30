import { useQuery } from '@tanstack/react-query';
import { formatUnits } from 'viem';
import { useAccount, useChainId, usePublicClient } from 'wagmi';

import { EulerAccountLensAbi } from '@lib/abis/euler-account-lens.abi';
import type { TUseQueryOptions } from '@lib/configs/react-query.config';
import { useAccountLensAddress } from '@lib/hooks/contracts.hook';
import { useVaultInfo } from '@lib/hooks/vault.hook';

export const vaultQueryKeys = {
  vaultAddressBalance: (vaultAddress?: `0x${string}`, chainId?: number) => [
    'vault-address-balance',
    vaultAddress,
    chainId
  ]
} as const;

export const useVaultAddressBalance = (
  vaultAddress?: `0x${string}` | null,
  config?: TUseQueryOptions<bigint>
) => {
  const publicClient = usePublicClient();
  const chainId = useChainId();
  const { address: connectedAccount } = useAccount();
  const accountLensAddress = useAccountLensAddress();
  const { data: vaultInfo } = useVaultInfo(vaultAddress as `0x${string}`);

  const { data: vaultAccountShares } = useQuery({
    queryKey: vaultQueryKeys.vaultAddressBalance(
      vaultAddress as `0x${string}`,
      chainId
    ),
    queryFn: async () => {
      if (
        !publicClient ||
        !connectedAccount ||
        !vaultAddress ||
        !accountLensAddress
      )
        return 0n;

      const balance = await publicClient?.readContract({
        abi: EulerAccountLensAbi,
        address: accountLensAddress as `0x${string}`,
        functionName: 'getAccountInfo',
        args: [connectedAccount as `0x${string}`, vaultAddress as `0x${string}`]
      });

      return balance?.vaultAccountInfo?.shares;
    },
    enabled: Boolean(
      vaultAddress && chainId && connectedAccount && accountLensAddress
    ),
    ...config
  });

  return {
    balance: vaultAccountShares || 0n,
    formattedBalance: formatUnits(
      vaultAccountShares || 0n,
      Number(vaultInfo?.assetDecimals || 6)
    )
  };
};
