import { ArrowUpDownIcon } from 'lucide-react';

import { Button } from '@ui/button';
import { Tooltip } from '@ui/tooltip/tooltip';

import { useSwapTokens } from '@composed/swap/swap.store';

export function SwapCardSwapTokenPosition() {
  const swapTokens = useSwapTokens();

  return (
    <div className='relative z-10 flex justify-center'>
      <Tooltip asChild content='Swap token position'>
        <Button variant='outline' size='sm-icon' onClick={swapTokens}>
          <ArrowUpDownIcon />
        </Button>
      </Tooltip>
    </div>
  );
}
