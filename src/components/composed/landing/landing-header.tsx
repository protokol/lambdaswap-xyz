import { Link } from '@tanstack/react-router';

import { Button } from '@ui/button';

import { WalletConnect } from '@composed/wallet-connect';

export const LandingHeader = () => (
  <header className='border-grid bg-background/95 sticky top-0 z-50 w-full border-b'>
    <div className='container mx-auto flex h-14 items-center justify-between px-4'>
      <div className='flex items-center gap-4'>
        <Link
          to='/'
          className='text-foreground flex items-center gap-2 font-bold'
        >
          <img src='/logo.svg' alt='LambdaSwap' className='size-6' />
          LambdaSwap
        </Link>
      </div>

      <div className='flex items-center gap-2'>
        <Button asChild variant='ghost'>
          <Link to='/pools'>Explore pools</Link>
        </Button>
        <WalletConnect />
      </div>
    </div>
  </header>
);
