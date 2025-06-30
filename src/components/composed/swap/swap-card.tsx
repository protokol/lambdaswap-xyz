import { Card, CardContent } from '@ui/card';

import { SwapCardButton } from '@composed/swap/swap-card-button';
import { SwapCardHeader } from '@composed/swap/swap-card-header';
import { SwapCardSummary } from '@composed/swap/swap-card-summary';
import { SwapCardSwapTokenPosition } from '@composed/swap/swap-card-swap-token-position';
import { SwapCardTokenFrom } from '@composed/swap/swap-card-token-from';
import { SwapCardTokenTo } from '@composed/swap/swap-card-token-to';
import { useSwapOperations } from '@composed/swap/swap.hooks';

export function SwapCard() {
  const { handleSwap } = useSwapOperations();

  return (
    <Card className='w-full max-w-120 pt-2'>
      <SwapCardHeader />

      <CardContent className='space-y-2'>
        <SwapCardTokenFrom />
        <SwapCardSwapTokenPosition />
        <SwapCardTokenTo />
      </CardContent>

      <SwapCardSummary />
      <SwapCardButton onSwap={handleSwap} />
    </Card>
  );
}
