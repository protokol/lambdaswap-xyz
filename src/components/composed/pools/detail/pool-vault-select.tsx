import { Label } from '@ui/label';

import { VaultByAssetSelectButton } from '@composed/pools/detail/vault-select-button';

import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';

type PoolVaultSelectProps = {
  assetAddress?: `0x${string}`;
  vaultAddress?: `0x${string}`;
  balance: string;
  onVaultSelect: (vaultAddress: `0x${string}`) => void;
  positionRequired?: boolean;
};
export function PoolVaultSelect({
  balance,
  assetAddress,
  vaultAddress,
  onVaultSelect,
  positionRequired = true
}: PoolVaultSelectProps) {
  const vaultAssetMetadata = assetAddress
    ? getAssetMetadata(assetAddress)
    : null;

  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <Label>{`${vaultAssetMetadata?.symbol ? vaultAssetMetadata?.symbol : ''} Vault`}</Label>
      </div>

      <VaultByAssetSelectButton
        assetAddress={assetAddress}
        vaultAddress={vaultAddress}
        onVaultSelect={onVaultSelect}
      />
      {positionRequired && balance !== '0' && (
        <div className='text-muted-foreground text-right text-xs'>{`${balance} ${vaultAssetMetadata?.symbol}`}</div>
      )}
      {positionRequired && balance === '0' && (
        <div className='text-destructive text-center text-xs'>
          No position in selected vault.
        </div>
      )}
    </div>
  );
}
