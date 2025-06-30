import { InfoIcon } from 'lucide-react';
import { useMemo } from 'react';

import { Label } from '@ui/label';
import { TokenImage } from '@ui/token/token-image';
import { Tooltip } from '@ui/tooltip/tooltip';

import { useVaultAddressBalance } from '@lib/api/vaults/vault.hook';
import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';
import { useAssetPrice, useTokenSymbol } from '@lib/hooks/token.hook';
import { formatCurrency } from '@lib/number-formatter.utils';

type PoolLiquidityInputProps = {
  asset: `0x${string}` | null;
  vaultAddress: `0x${string}` | null;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};
export function PoolLiquidityInput({
  asset,
  vaultAddress,
  value,
  onChange,
  disabled
}: PoolLiquidityInputProps) {
  const tokenMetadata = getAssetMetadata(asset || undefined);
  const { formattedBalance } = useVaultAddressBalance(vaultAddress);
  const tokenSymbol = useTokenSymbol(asset || undefined);

  const { data: assetPrice } = useAssetPrice(asset || undefined);

  const supplyValue = useMemo(() => {
    if (Number(value) || !tokenSymbol) {
      return `~ ${formatCurrency((assetPrice || 0) * Number(value || '0'), {
        maximumFractionDigits: 4
      })}`;
    }

    return `1 ${tokenSymbol} = ${formatCurrency(assetPrice || 0, {
      maximumFractionDigits: 4
    })}`;
  }, [value, tokenSymbol, assetPrice]);

  return (
    <div className='focus-within:border-primary space-y-2 rounded-xl border p-4'>
      <Label htmlFor={`add-liquidity-field-${vaultAddress}`}>
        Asset {tokenSymbol}
      </Label>

      <div className='flex justify-between gap-2'>
        <input
          id={`add-liquidity-field-${vaultAddress}`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          type='number'
          placeholder='0'
          className='disabled:text-muted-foreground h-auto w-full [appearance:textfield] bg-transparent p-0 text-3xl font-bold focus-visible:ring-0 focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          onWheel={(e) => e.currentTarget.blur()}
          disabled={disabled}
        />

        <div className='shrink-0'>
          <TokenImage
            logoURI={tokenMetadata?.logoURI}
            symbol={tokenSymbol || 'Unknown'}
            size='size-8'
          />
        </div>
      </div>

      <div className='text-muted-foreground flex items-center justify-between gap-4 text-xs'>
        <div>{supplyValue}</div>
        <div className='flex gap-1'>
          <Tooltip content='Your available balance in this vault.'>
            <InfoIcon className='size-3' />
          </Tooltip>
          {formattedBalance}
          {!disabled && (
            <button
              className='text-primary font-medium hover:opacity-80'
              onClick={() => {
                onChange?.(formattedBalance);
              }}
            >
              MAX
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
