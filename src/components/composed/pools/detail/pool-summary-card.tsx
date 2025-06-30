import { InfoIcon } from 'lucide-react';
import { formatUnits } from 'viem';

import { Card, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { Tooltip } from '@ui/tooltip/tooltip';
import { ValueKeyPair } from '@ui/value-key-pair';

import {
  usePoolParams,
  useVault0Store,
  useVault1Store
} from '@composed/pools/pool.store';

import { useTokenDecimals, useTokenSymbol } from '@lib/hooks/token.hook';
import { useVaultInfo } from '@lib/hooks/vault.hook';
import { formatPercentage } from '@lib/number-formatter.utils';

export function PoolSummaryCard() {
  const { asset0 } = useVault0Store();
  const { asset1 } = useVault1Store();
  const {
    fee,
    vault0,
    vault1,
    concentrationX,
    concentrationY,
    priceX,
    priceY,
    equilibriumReserve0,
    equilibriumReserve1
  } = usePoolParams();

  const { data: vault0Info } = useVaultInfo(vault0 as `0x${string}`);
  const { data: vault1Info } = useVaultInfo(vault1 as `0x${string}`);

  const asset0Symbol = useTokenSymbol(asset0 || undefined);
  const asset1Symbol = useTokenSymbol(asset1 || undefined);
  const asset0Decimals = useTokenDecimals(asset0 || undefined);
  const asset1Decimals = useTokenDecimals(asset1 || undefined);

  const symbol0 = asset0Symbol ? `(${asset0Symbol})` : '';
  const symbol1 = asset1Symbol ? `(${asset1Symbol})` : '';
  const symbolPair = `(${asset0Symbol || '-'}/${asset1Symbol || '-'})`;
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Pool Summary</CardTitle>
          <CardDescription>
            Review your pool details. If everything looks good, you are just one
            click away from creating your pool.
          </CardDescription>
        </CardHeader>
        <div className='space-y-2'>
          <ValueKeyPair
            label={`Vault ${symbol0}`}
            value={
              vault0Info?.vaultName ? (
                <span className='inline-flex gap-1'>
                  {vault0Info?.vaultName}
                  <Tooltip content={vault0Info.vault}>
                    <InfoIcon className='size-3' />
                  </Tooltip>
                </span>
              ) : (
                '-'
              )
            }
          />
          <ValueKeyPair
            label={`Vault ${symbol1}`}
            value={
              vault1Info?.vaultName ? (
                <span className='inline-flex gap-1'>
                  {vault1Info?.vaultName}
                  <Tooltip content={vault1Info.vault}>
                    <InfoIcon className='size-3' />
                  </Tooltip>
                </span>
              ) : (
                '-'
              )
            }
          />
          <ValueKeyPair
            label={`Equilibrium Reserve ${symbol0}`}
            value={
              equilibriumReserve0 !== null
                ? Number(formatUnits(equilibriumReserve0, asset0Decimals))
                : '-'
            }
          />
          <ValueKeyPair
            label={`Equilibrium Reserve ${symbol1}`}
            value={
              equilibriumReserve1 !== null
                ? Number(formatUnits(equilibriumReserve1, asset1Decimals))
                : '-'
            }
          />
          <ValueKeyPair
            label={`Price at Equilibrium ${symbolPair}`}
            value={
              priceX && priceY && priceY > 0n
                ? Number(priceX) / Number(priceY)
                : '-'
            }
          />
          <ValueKeyPair
            label={`Concentration ${symbol0}`}
            value={`${concentrationX !== null ? `${formatPercentage(Number(formatUnits(concentrationX, 18)))}` : '-'}`}
          />
          <ValueKeyPair
            label={`Concentration ${symbol1}`}
            value={`${concentrationY !== null ? `${formatPercentage(Number(formatUnits(concentrationY, 18)))}` : '-'}`}
          />
          <ValueKeyPair
            label='Fee'
            value={
              fee !== null
                ? formatPercentage(Number(formatUnits(fee, 18)))
                : '-'
            }
          />
        </div>
      </Card>
      {/*
      <Card className='p-0'>
        <CardHeader className='p-4'>
          <CardTitle>Liquidity Curve</CardTitle>
        </CardHeader>

        <PoolAamCurveChart
          initialReservesX={Number(formatUnits(priceX || 0n, 18))}
          initialReservesY={Number(formatUnits(priceY || 0n, 18))}
          pricingRatio={priceX && priceY ? Number(priceX) / Number(priceY) : 1}
          concentrationX={Number(formatUnits(concentrationX || 0n, 18))}
          concentrationY={Number(formatUnits(concentrationY || 0n, 18))}
          assetXSymbol={asset0Symbol || 'X'}
          assetYSymbol={asset1Symbol || 'Y'}
        />
      </Card>
*/}
    </div>
  );
}
