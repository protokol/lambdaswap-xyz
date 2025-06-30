import { SwapCard } from '@composed/swap/swap-card';

export const HeroSection = () => (
  <section className='relative py-20'>
    <div className='relative container mx-auto flex flex-col items-center gap-12 px-4'>
      <div className='flex flex-col items-center gap-1 text-center'>
        <h1 className='text-4xl font-bold tracking-tighter text-pretty sm:text-5xl md:text-6xl'>
          <span className='text-primary'>LambdaSwap</span>
          <br />
          Your Liquidity, Your Strategy
        </h1>
        <p className='text-muted-foreground mt-4 max-w-2xl md:text-xl'>
          Experience seamless, efficient, and secure token swaps with
          LambdaSwap, powered by Euler Vaults.
        </p>
      </div>
      <div className='group relative w-full max-w-lg'>
        <div className='absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 opacity-20 blur-xl transition-opacity duration-700 group-hover:opacity-40' />
        <div className='relative'>
          <SwapCard />
        </div>
      </div>
    </div>
  </section>
);
