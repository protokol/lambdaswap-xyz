import { formatUnits, parseUnits } from 'viem';

import { Label } from '@ui/label';
import { Slider } from '@ui/slider';

import { formatPercentage } from '@lib/number-formatter.utils';

type PoolConcentrationSelectProps = {
  concentration: bigint;
  setConcentration: (concentration: bigint) => void;
};

export function PoolConcentrationSelect({
  concentration,
  setConcentration
}: PoolConcentrationSelectProps) {
  return (
    <div className='space-y-2'>
      <Label>Concentration Y</Label>
      <div className='mt-8 px-2'>
        <Slider
          labelFormatter={(value) => formatPercentage(value / 100)}
          min={0}
          max={100}
          value={[
            Number(
              (Number(formatUnits(concentration || 0n, 18)) * 100).toFixed(2)
            )
          ]}
          onValueChange={([v]) =>
            setConcentration(parseUnits(String(v / 100), 18))
          }
          step={1}
        />
        <div className='text-muted-foreground mt-1 flex flex-row justify-between text-xs'>
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
