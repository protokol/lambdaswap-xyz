import { ChevronDownIcon, CoinsIcon } from 'lucide-react';

import { Button } from '@ui/button';
import { TokenImage } from '@ui/token/token-image';
import { TokenSelectDialog } from '@ui/token/token-select-dialog';

import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';

type SwapTokenButtonProps = {
  token: `0x${string}` | null;
  onTokenSelect: (token: `0x${string}`) => void;
  className?: string;
};

export function SwapTokenButton({
  token,
  onTokenSelect,
  className
}: SwapTokenButtonProps) {
  const assetMetadata = token ? getAssetMetadata(token) : null;

  return (
    <TokenSelectDialog onTokenSelect={onTokenSelect}>
      <Button variant='outline' size='lg' className={className}>
        {token && (
          <>
            <div className='bg-muted/10 relative flex size-5 items-center justify-center overflow-hidden rounded-full'>
              <TokenImage
                logoURI={assetMetadata?.logoURI}
                symbol={assetMetadata?.symbol || token}
              />
            </div>
            <span className='font-semibold whitespace-nowrap'>
              {assetMetadata?.symbol}
            </span>
          </>
        )}

        {!token && (
          <>
            <CoinsIcon className='size-5' />
            <span className='whitespace-nowrap'>Select token</span>
          </>
        )}
        <ChevronDownIcon />
      </Button>
    </TokenSelectDialog>
  );
}
