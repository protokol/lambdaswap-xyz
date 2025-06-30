import { AccordionTrigger } from '@radix-ui/react-accordion';
import { Link } from '@tanstack/react-router';
import {
  ArrowRightLeftIcon,
  BitcoinIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  InfoIcon,
  PackageIcon,
  PencilIcon,
  UnlinkIcon
} from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { encodeFunctionData, formatUnits, getAddress, zeroAddress } from 'viem';
import { useAccount, usePublicClient } from 'wagmi';

import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionRoot
} from '@ui/accordion/accordion.component';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { Card, CardDescription, CardTitle } from '@ui/card';
import { CopyButton } from '@ui/copy-button';
import { AssetPairImage } from '@ui/token/asset-pair-image';
import { Tooltip } from '@ui/tooltip/tooltip';
import { ValueKeyPair } from '@ui/value-key-pair';

import { useSwapActions, useSwapPoolAddress } from '@composed/swap/swap.store';

import { EulerSwapFactoryAbi } from '@lib/abis/euler-swap-factory.abi';
import { EvcAbi } from '@lib/abis/evc.abi';
import { eulerPoolsQueryKeys } from '@lib/api/pools/euler-pools.hook';
import type { EulerPoolDetail } from '@lib/api/pools/euler-pools.type';
import type { BatchItem } from '@lib/api/vaults/vault.types';
import { invalidateQueryKeys } from '@lib/configs/react-query.config';
import { getExplorerLink, truncateAddress } from '@lib/crypto.utils';
import { getEulerVaultInfo } from '@lib/data/vaults/1/euler-vault.util';
import {
  useEVCAddress,
  useSwapV1FactoryAddress
} from '@lib/hooks/contracts.hook';
import { useTokenDecimals, useTokenSymbol } from '@lib/hooks/token.hook';
import { useWriteContract } from '@lib/hooks/write-contract.hook';
import {
  formatCompactCurrency,
  formatNumber,
  formatPercentage
} from '@lib/number-formatter.utils';
import { cn } from '@lib/utils';

export type ExtendedEulerPoolDetail = EulerPoolDetail & {
  volume7d?: string;
  owner?: string;
  account?: string;
};
type PoolCardProps = {
  pool: ExtendedEulerPoolDetail;
};

export function PoolCard({ pool }: PoolCardProps) {
  const { address: connectedAddress } = useAccount();
  const isOwned = pool.eulerAccount === connectedAddress;

  const vault0Info = getEulerVaultInfo(pool.vault0);
  const vault1Info = getEulerVaultInfo(pool.vault1);

  const asset0Symbol = useTokenSymbol(pool.asset0);
  const asset1Symbol = useTokenSymbol(pool.asset1);
  const asset0Decimals = useTokenDecimals(pool.asset0);
  const asset1Decimals = useTokenDecimals(pool.asset1);

  const vault0Name = vault0Info?.name || asset0Symbol;
  const vault1Name = vault1Info?.name || asset1Symbol;

  const { writeContractAsync, isPending } = useWriteContract();
  const publicClient = usePublicClient();
  const evcAddress = useEVCAddress();
  const swapV1FactoryAddress = useSwapV1FactoryAddress();
  const swapPoolAddress = useSwapPoolAddress();
  const { setNewSwap } = useSwapActions();

  const isPoolSelected = useMemo(
    () =>
      swapPoolAddress &&
      getAddress(pool.address) === getAddress(swapPoolAddress),
    [swapPoolAddress, pool.address]
  );

  const onUninstall = useCallback(async () => {
    if (
      !publicClient ||
      !evcAddress ||
      !connectedAddress ||
      !swapV1FactoryAddress
    )
      return;

    try {
      const batchItemsToExecute: BatchItem[] = [
        {
          onBehalfOfAccount: zeroAddress,
          targetContract: evcAddress as `0x${string}`,
          value: 0n,
          data: encodeFunctionData({
            abi: EvcAbi,
            functionName: 'setAccountOperator',
            args: [pool.eulerAccount, pool.address, false]
          })
        },
        {
          onBehalfOfAccount: pool.eulerAccount,
          targetContract: swapV1FactoryAddress,
          value: 0n,
          data: encodeFunctionData({
            abi: EulerSwapFactoryAbi,
            functionName: 'uninstallPool',
            args: []
          })
        }
      ];

      await writeContractAsync({
        abi: EvcAbi,
        functionName: 'batch',
        address: evcAddress as `0x${string}`,
        args: [batchItemsToExecute]
      });

      invalidateQueryKeys(
        eulerPoolsQueryKeys.poolsByPair(
          pool.asset0,
          pool.asset1,
          publicClient.chain.id
        )
      );
      invalidateQueryKeys(eulerPoolsQueryKeys.pools(publicClient.chain.id));
    } catch {}
  }, [
    connectedAddress,
    evcAddress,
    pool.address,
    pool.asset0,
    pool.asset1,
    pool.eulerAccount,
    publicClient,
    swapV1FactoryAddress,
    writeContractAsync
  ]);

  return (
    <AccordionRoot type='single' collapsible>
      <AccordionItem value={pool.address}>
        <Card
          className={cn('gap-0', {
            'border-primary': isPoolSelected
          })}
        >
          <AccordionTrigger className='group flex items-center justify-between gap-2 p-0'>
            <div className='flex flex-grow items-center gap-2'>
              <div>
                <ChevronDownIcon className='text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180' />
              </div>

              <div className='flex grow items-center gap-4'>
                <div className='space-between flex grow gap-2'>
                  <div className='flex shrink-0 items-center'>
                    <AssetPairImage asset0={pool.asset0} asset1={pool.asset1} />
                  </div>

                  <div className='flex flex-col items-start'>
                    <div className='flex justify-between gap-2'>
                      <div className='flex items-center gap-2'>
                        <CardTitle className='text-left'>{`${vault0Name}/${vault1Name}`}</CardTitle>
                        {isOwned && <Badge variant='outline'>Owned</Badge>}
                        {isPoolSelected && <Badge>Selected</Badge>}
                      </div>
                    </div>
                    <CardDescription className='text-xs'>
                      <span>Fee</span>{' '}
                      <span className='text-accent-foreground font-medium'>
                        {formatPercentage(formatFee(pool.fee))}
                      </span>
                      {'; '}
                      <span>7d Volume</span>{' '}
                      <span className='text-accent-foreground font-medium'>
                        {pool.volume7d
                          ? formatCompactCurrency(
                              Number(
                                formatUnits(BigInt(pool.volume7d || '0'), 8)
                              )
                            )
                          : '-'}
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <Tooltip content={`Swap ${vault0Name}/${vault1Name}`} asChild>
                  <Button
                    size='icon'
                    variant='ghost'
                    onClick={(e) => {
                      e.preventDefault();

                      setNewSwap(pool.address, pool.asset0, pool.asset1);
                    }}
                    asChild
                  >
                    <div>
                      <ArrowRightLeftIcon />
                    </div>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className='space-y-6 p-4 pb-0 text-sm'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-1'>
                <h4 className='flex items-center gap-2 font-medium'>
                  <PackageIcon className='text-muted-foreground size-4' />
                  <span>Vaults</span>
                </h4>

                <div>
                  <ValueKeyPair
                    label='Vault 0'
                    value={
                      <div className='flex items-center gap-1'>
                        <Tooltip content='View in explorer'>
                          <a
                            href={getExplorerLink(pool.vault0, 'address')}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1 hover:underline'
                          >
                            {truncateAddress(pool.vault0)}
                            <ExternalLinkIcon className='size-3' />
                          </a>
                        </Tooltip>
                        <CopyButton
                          className='size-auto'
                          size='sm'
                          value={pool.vault0}
                        />
                      </div>
                    }
                  />
                  <ValueKeyPair
                    label='Vault 1'
                    value={
                      <div className='flex items-center gap-1'>
                        <Tooltip content='View in explorer'>
                          <a
                            href={getExplorerLink(pool.vault1, 'address')}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1 hover:underline'
                          >
                            {truncateAddress(pool.vault1)}
                            <ExternalLinkIcon className='size-3' />
                          </a>
                        </Tooltip>
                        <CopyButton
                          className='size-auto'
                          size='sm'
                          value={pool.vault1}
                        />
                      </div>
                    }
                  />
                </div>
              </div>

              <div className='space-y-1'>
                <h4 className='flex items-center gap-2 font-medium'>
                  <BitcoinIcon className='text-muted-foreground size-4' />
                  <span>Reserves</span>
                </h4>

                <div>
                  <ValueKeyPair
                    label='Reserve 0'
                    value={`${formatNumber(
                      Number(
                        formatUnits(
                          BigInt(pool.currentReserve0),
                          asset0Decimals || 18
                        )
                      )
                    )} ${asset0Symbol}`}
                  />
                  <ValueKeyPair
                    label='Reserve 1'
                    value={`${formatNumber(
                      Number(
                        formatUnits(
                          BigInt(pool.currentReserve1),
                          asset1Decimals || 18
                        )
                      )
                    )} ${asset1Symbol}`}
                  />
                </div>
              </div>

              {pool.owner && (
                <div className='space-y-1'>
                  <h4 className='flex items-center gap-2 font-medium'>
                    <InfoIcon className='text-muted-foreground size-4' />
                    <span>Info</span>
                  </h4>

                  <div>
                    <ValueKeyPair
                      label='Owner'
                      value={
                        <div className='flex items-center gap-1'>
                          <Tooltip content='View in explorer'>
                            <a
                              href={getExplorerLink(
                                pool.owner || '0x',
                                'address'
                              )}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center gap-1 hover:underline'
                            >
                              {truncateAddress(pool.owner)}
                              <ExternalLinkIcon className='size-3' />
                            </a>
                          </Tooltip>
                          <CopyButton
                            className='size-auto'
                            size='sm'
                            value={pool.owner || '0x'}
                          />
                        </div>
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {isOwned && (
              <div className='inline-flex gap-2'>
                <Button asChild size='xs' variant='outline'>
                  <Link to='/eulerswap' params={{ poolId: pool.address }}>
                    <PencilIcon /> Rebalance
                  </Link>
                </Button>

                <Button
                  disabled={isPending}
                  size='xs'
                  variant='outline'
                  onClick={(e) => {
                    e.preventDefault();
                    onUninstall();
                  }}
                >
                  <UnlinkIcon /> {isPending ? 'Uninstalling...' : 'Uninstall'}
                </Button>
              </div>
            )}
          </AccordionContent>
        </Card>
      </AccordionItem>
    </AccordionRoot>
  );
}

export const formatFee = (fee: bigint) => {
  const feeNumber = Number(fee);
  return feeNumber / 10 ** 18;
};
