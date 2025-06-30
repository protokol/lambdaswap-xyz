import { useMemo, useState } from 'react';

import { Dialog } from '@ui/dialog/dialog';
import { DialogHeader, DialogTitle } from '@ui/dialog/dialog.components';
import { SearchInput } from '@ui/search-input';
import { TokenImage } from '@ui/token/token-image';

import { useEulerTokenList } from '@lib/data/vaults/use-euler-token-list';

type TokenSelectDialogProps = {
  children: React.ReactNode;
  onTokenSelect: (token: `0x${string}`) => void;
};

export function TokenSelectDialog({
  children,
  onTokenSelect
}: TokenSelectDialogProps) {
  const tokenList = useEulerTokenList();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTokenList = useMemo(() => {
    if (!searchQuery) return Object.values(tokenList);

    return Object.values(tokenList).filter(
      (token) =>
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.addressInfo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tokenList]);

  return (
    <Dialog
      className='flex flex-col overflow-hidden'
      trigger={children}
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          setSearchQuery('');
        }
        setIsDialogOpen(open);
      }}
    >
      {isDialogOpen && (
        <>
          <DialogHeader>
            <DialogTitle>Token list</DialogTitle>
          </DialogHeader>
          <SearchInput
            placeholder='Search by name or address...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='min-h-0 flex-1 overflow-y-auto'>
            <div
              style={{
                contentVisibility: 'auto'
              }}
            >
              {filteredTokenList?.map((token) => (
                <button
                  className='text-foreground group hover:bg-muted flex w-full items-center gap-4 rounded-xl p-3 transition-all duration-200'
                  key={token.addressInfo}
                  onClick={() => {
                    setIsDialogOpen(false);
                    onTokenSelect(token.addressInfo as `0x${string}`);
                  }}
                >
                  <div className='relative flex size-8 items-center justify-center overflow-hidden rounded-full'>
                    <TokenImage
                      size='size-8'
                      logoURI={token.logoURI}
                      symbol={token.symbol}
                    />
                  </div>
                  <div className='flex-1 text-left'>
                    <div className='inline-flex text-sm font-semibold'>
                      {token.symbol}
                    </div>

                    <div className='text-muted-foreground/80 text-xs'>
                      {token.name}
                    </div>
                  </div>
                </button>
              ))}

              {filteredTokenList?.length === 0 && (
                <div className='text-muted-foreground flex h-full items-center justify-center py-2 text-sm'>
                  No tokens found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}
