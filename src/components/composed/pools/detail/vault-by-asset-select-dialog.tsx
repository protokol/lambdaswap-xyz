import { Loader2Icon, PlusIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { formatUnits } from 'viem';
import { useAccount, useChainId } from 'wagmi';

import { Button } from '@ui/button';
import { Dialog } from '@ui/dialog/dialog';
import { DialogHeader, DialogTitle } from '@ui/dialog/dialog.components';
import { SearchInput } from '@ui/search-input';
import { Tooltip } from '@ui/tooltip/tooltip';

import {
  eulerAccountVaultPositionsQuery,
  eulerVaultsByAssetQuery
} from '@lib/api/euler.gql';
import { sortVaultsByBalance } from '@lib/api/vaults/vault.util';
import { useGraphql } from '@lib/configs/graphql.config';
import { truncateAddress } from '@lib/crypto.utils';
import {
  getAssetMetadata,
  getEulerVaultInfo
} from '@lib/data/vaults/1/euler-vault.util';
import { cn } from '@lib/utils';

type VaultByAssetSelectDialogProps = {
  children: React.ReactNode;
  assetAddress?: `0x${string}`;
  onVaultSelect: (vaultAddress: `0x${string}`) => void;
};

export function VaultByAssetSelectDialog({
  children,
  assetAddress,
  onVaultSelect
}: VaultByAssetSelectDialogProps) {
  const { address: connectedAddress } = useAccount();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: vaults, isLoading: isLoadingVaults } = useGraphql(
    eulerVaultsByAssetQuery,
    {
      asset: assetAddress
    },
    {
      enabled: !!assetAddress
    }
  );

  const { data: accountVaultPositions } = useGraphql(
    eulerAccountVaultPositionsQuery,
    {
      account: connectedAddress
    },
    {
      enabled: !!connectedAddress
    }
  );

  const vaultsWithBalance = sortVaultsByBalance(
    accountVaultPositions?.trackingVaultBalances,
    vaults?.eulerVaults
  );

  const extendedVaults = useMemo(
    () =>
      vaultsWithBalance.map((vault) => {
        const vaultInfo = getEulerVaultInfo(vault.id);
        return {
          ...vault,
          prettyName: vaultInfo?.name || vault.name
        };
      }),
    [vaultsWithBalance]
  );

  const filteredAssetList = useMemo(() => {
    if (!searchQuery) return extendedVaults;

    return extendedVaults.filter(
      (vault) =>
        vault.prettyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vault.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vault.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [extendedVaults, searchQuery]);

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
            <DialogTitle>Vault list</DialogTitle>
          </DialogHeader>
          <SearchInput
            placeholder='Search by name, symbol or address...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='min-h-0 flex-1 overflow-y-auto'>
            <div
              style={{
                contentVisibility: 'auto'
              }}
            >
              {!isLoadingVaults &&
                filteredAssetList?.map((vault) => {
                  const assetMetadata = getAssetMetadata(vault.asset);
                  return (
                    <button
                      className={cn(
                        'text-foreground group hover:bg-muted flex w-full items-center justify-between gap-4 rounded-xl p-3 transition-all duration-200',
                        {
                          'bg-accent': false
                        }
                      )}
                      key={vault.id}
                      onClick={() => {
                        setIsDialogOpen(false);
                        onVaultSelect(vault.id);
                      }}
                    >
                      <div className='flex-1 text-left'>
                        <div className='inline-flex items-center text-sm font-semibold'>
                          {vault.prettyName}
                          <EulerDepositButton vaultAddress={vault.id} />
                        </div>

                        <div className='text-muted-foreground/80 text-xs'>
                          {vault.symbol}
                          {' - '}
                          <Tooltip content={vault.id}>
                            {truncateAddress(vault.id)}
                          </Tooltip>
                        </div>
                      </div>
                      <div className='text-right font-mono text-sm'>
                        {formatUnits(
                          BigInt(vault.balance || '0'),
                          Number(vault.decimals)
                        )}{' '}
                        <span className='opacity-80'>
                          {assetMetadata?.symbol}
                        </span>
                      </div>
                    </button>
                  );
                })}

              {!isLoadingVaults && filteredAssetList?.length === 0 && (
                <div className='text-muted-foreground flex h-full items-center justify-center py-2 text-sm'>
                  No vaults found
                </div>
              )}

              {isLoadingVaults && (
                <div className='flex h-full items-center justify-center py-2 text-sm'>
                  <Loader2Icon className='size-4 animate-spin' />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}

export const EulerDepositButton = ({
  vaultAddress
}: {
  vaultAddress: `0x${string}`;
}) => {
  const chainId = useChainId();

  const chainToName: Record<number, string> = {
    1: 'ethereum',
    130: 'unichain'
  };

  const eulerVaultUrl = `https://app.euler.finance/vault/${vaultAddress}?network=${chainToName[chainId]}`;

  return (
    <Tooltip content='Deposit on Euler' asChild>
      <Button size='sm-icon' variant='ghost' asChild>
        <a
          href={eulerVaultUrl}
          target='_blank'
          rel='noopener noreferrer'
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            window.open(eulerVaultUrl, '_blank');
          }}
        >
          <PlusIcon />
        </a>
      </Button>
    </Tooltip>
  );
};
