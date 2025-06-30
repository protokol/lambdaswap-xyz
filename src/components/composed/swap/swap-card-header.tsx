import { RotateCcwIcon, SettingsIcon } from 'lucide-react';

import { Button } from '@ui/button';
import { CardHeader, CardTitle } from '@ui/card';
import { Popover } from '@ui/popover/popover';
import { Slider } from '@ui/slider';
import { Tooltip } from '@ui/tooltip/tooltip';

import {
  useResetSwapState,
  useSwapActions,
  useSwapSlippage
} from '@composed/swap/swap.store';

import { formatPercentage } from '@lib/number-formatter.utils';

export function SwapCardHeader() {
  const resetSwapState = useResetSwapState();
  const slippage = useSwapSlippage();
  const { setSlippage } = useSwapActions();

  return (
    <CardHeader>
      <div className='flex items-center justify-between gap-2'>
        <CardTitle>Swap</CardTitle>
        <div className='inline-flex gap-1'>
          <Tooltip content='Manage settings' asChild>
            <Popover
              trigger={
                <Button variant='ghost' size='icon'>
                  <SettingsIcon />
                </Button>
              }
            >
              <div className='space-y-2'>
                <h4 className='text-md leading-none font-semibold'>
                  Slippage Tolerance
                </h4>
                <div className='flex items-center gap-2'>
                  <Slider
                    hideLabel
                    min={0.1}
                    max={5}
                    value={[slippage * 100]}
                    onValueChange={([v]) =>
                      setSlippage(parseFloat((v / 100).toFixed(3)))
                    }
                    step={0.1}
                  />
                  <span className='w-12 text-right text-sm'>
                    {formatPercentage(slippage, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1
                    })}
                  </span>
                </div>
                <div className='flex gap-2'>
                  <Button
                    size='xs'
                    variant={slippage === 0.001 ? 'default' : 'outline'}
                    onClick={() => setSlippage(0.001)}
                  >
                    0.1%
                  </Button>
                  <Button
                    size='xs'
                    variant={slippage === 0.005 ? 'default' : 'outline'}
                    onClick={() => setSlippage(0.005)}
                  >
                    0.5%
                  </Button>
                  <Button
                    size='xs'
                    variant={slippage === 0.01 ? 'default' : 'outline'}
                    onClick={() => setSlippage(0.01)}
                  >
                    1.0%
                  </Button>
                </div>
              </div>
            </Popover>
          </Tooltip>
          <Tooltip content='Reset' asChild>
            <Button variant='ghost' size='icon' onClick={resetSwapState}>
              <RotateCcwIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </CardHeader>
  );
}
