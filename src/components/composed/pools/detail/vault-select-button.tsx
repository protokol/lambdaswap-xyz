import { ChevronDownIcon } from 'lucide-react';
import { useMemo } from 'react';
import { useReadContract } from 'wagmi';

import { Button } from '@ui/button';

import { VaultByAssetSelectDialog } from '@composed/pools/detail/vault-by-asset-select-dialog';

import { ElensAbi } from '@lib/abis/lens.abi';
import { truncateAddress } from '@lib/crypto.utils';
import { getEulerVaultInfo } from '@lib/data/vaults/1/euler-vault.util';
import { useVaultLensAddress } from '@lib/hooks/contracts.hook';

type VaultByAssetSelectButtonProps = {
  assetAddress?: `0x${string}`;
  vaultAddress?: `0x${string}`;
  onVaultSelect: (vaultAddress: `0x${string}`) => void;
};

export function VaultByAssetSelectButton({
  assetAddress,
  vaultAddress,
  onVaultSelect
}: VaultByAssetSelectButtonProps) {
  const eulerVaultLensAddress = useVaultLensAddress();
  const { data: vault, isLoading } = useReadContract({
    abi: ElensAbi,
    address: eulerVaultLensAddress,
    functionName: 'getVaultInfoFull',
    args: [vaultAddress as `0x${string}`]
  });

  const vaultInfo = useMemo(() => {
    if (vault?.vault) {
      return getEulerVaultInfo(vault.vault)?.name || vault.vaultName;
    }

    return vault?.vaultName || truncateAddress(vaultAddress);
  }, [vault?.vault, vault?.vaultName, vaultAddress]);

  return (
    <VaultByAssetSelectDialog
      assetAddress={assetAddress}
      onVaultSelect={onVaultSelect}
    >
      <Button size='lg' variant='outline' className='w-full'>
        {isLoading && <span className='truncate'>Loading vault...</span>}
        {!isLoading && vault && <span className='truncate'>{vaultInfo}</span>}
        {!isLoading && !vault && (
          <span className='truncate'>
            {truncateAddress(vaultAddress)}Select vault
          </span>
        )}
        <ChevronDownIcon />
      </Button>
    </VaultByAssetSelectDialog>
  );
}
