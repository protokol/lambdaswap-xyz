import {
  Accordion,
  AccordionItem,
  AccordionTrigger
} from '@radix-ui/react-accordion';
import { ChevronDownIcon, TriangleAlertIcon } from 'lucide-react';
import { useMemo } from 'react';

import { AccordionContent } from '@ui/accordion/accordion.component';
import { CardDescription, CardHeader, CardTitle } from '@ui/card';

import { PoolConcentrationSelect } from '@composed/pools/detail/pool-concentration-select';
import { PoolVaultSelect } from '@composed/pools/detail/pool-vault-select';
import {
  usePoolParamActions,
  usePoolParams,
  useVault0Store
} from '@composed/pools/pool.store';
import { useVault1Store } from '@composed/pools/pool.store';

import { useVaultAddressBalance } from '@lib/api/vaults/vault.hook';
import { cn } from '@lib/utils';

export function PoolAdvancedSettings() {
  const { vault0, asset0, setVault0 } = useVault0Store();
  const { vault1, asset1, setVault1 } = useVault1Store();
  const { concentrationX, concentrationY } = usePoolParams();
  const { setPoolParam } = usePoolParamActions();
  const { formattedBalance: formattedVault0Balance } =
    useVaultAddressBalance(vault0);
  const { formattedBalance: formattedVault1Balance } =
    useVaultAddressBalance(vault1);

  const noPositionInVault = useMemo(
    () => formattedVault0Balance === '0' && formattedVault1Balance === '0',
    [formattedVault0Balance, formattedVault1Balance]
  );

  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='advanced-settings' className='flex flex-col'>
        <AccordionTrigger
          className={cn(
            'text-muted-foreground flex items-center justify-center gap-2 text-center text-xs font-medium hover:opacity-80 [&[data-state="open"]>svg:nth-of-type(2)]:rotate-180',
            {
              'text-destructive': noPositionInVault
            }
          )}
        >
          <hr className='border-border flex-grow' />
          {noPositionInVault && <TriangleAlertIcon className='size-3' />}
          Advanced Settings
          <ChevronDownIcon className='size-4 transition-transform duration-200' />
          <hr className='border-border flex-grow' />
        </AccordionTrigger>
        <AccordionContent className='space-y-4 pt-4'>
          <CardHeader>
            <CardTitle className='text-base leading-4'>Vaults</CardTitle>
            <CardDescription>
              Select the source of your tokens. You need existing position in a
              vault to provide liquidity.
            </CardDescription>
          </CardHeader>
          <div className='grid grid-cols-2 gap-6'>
            <PoolVaultSelect
              balance={formattedVault0Balance}
              assetAddress={asset0 || undefined}
              vaultAddress={vault0 || undefined}
              onVaultSelect={setVault0}
            />
            <PoolVaultSelect
              balance={formattedVault1Balance}
              assetAddress={asset1 || undefined}
              vaultAddress={vault1 || undefined}
              onVaultSelect={setVault1}
            />
          </div>

          <CardHeader>
            <CardTitle className='text-base leading-4'>Concentration</CardTitle>
            <CardDescription>
              Concentration controls how densely liquidity is packed around a
              target price, with high values for stable pairs and low values for
              volatile ones.
            </CardDescription>
          </CardHeader>
          <div className='grid grid-cols-2 gap-6'>
            <PoolConcentrationSelect
              concentration={concentrationX || 0n}
              setConcentration={(v) => setPoolParam('concentrationX', v)}
            />
            <PoolConcentrationSelect
              concentration={concentrationY || 0n}
              setConcentration={(v) => setPoolParam('concentrationY', v)}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
