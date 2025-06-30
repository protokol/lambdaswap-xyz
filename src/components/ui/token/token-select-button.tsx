import { ChevronDownIcon, CoinsIcon } from 'lucide-react';

import { Button } from '@ui/button';
import { TokenImage } from '@ui/token/token-image';
import { TokenSelectDialog } from '@ui/token/token-select-dialog';

import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';

type TokenSelectButtonProps = {
  token?: `0x${string}`;
  onTokenSelect: (token: `0x${string}`) => void;
  className?: string;
};

export function TokenSelectButton({
  token,
  onTokenSelect,
  className
}: TokenSelectButtonProps) {
  const tokenMetadata = token ? getAssetMetadata(token) : null;

  return (
    <TokenSelectDialog onTokenSelect={onTokenSelect}>
      <Button variant='outline' size='lg' className={className}>
        {token && (
          <>
            <div className='bg-muted/10 relative flex size-6 items-center justify-center overflow-hidden rounded-full'>
              <TokenImage
                size='size-6'
                logoURI={tokenMetadata?.logoURI}
                symbol={tokenMetadata?.symbol || 'Unknown'}
              />
            </div>
            <span className='font-semibold whitespace-nowrap'>
              {tokenMetadata?.symbol || 'Unknown'}
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
