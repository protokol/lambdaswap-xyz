import { Link } from '@tanstack/react-router';
import { Landmark, SlidersHorizontal, Zap } from 'lucide-react';

import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';

const features = [
  {
    icon: <Landmark className='text-primary size-8' />,
    title: 'Earn Double Yield',
    description:
      "Your deposited assets automatically earn lending yield from Euler's vaults. This happens 24/7, even when your liquidity isn't being used for swaps. You earn this yield on top of the swap fees from traders."
  },
  {
    icon: <Zap className='text-primary size-8' />,
    title: 'Amplify Markets with JIT',
    description:
      'Provide deep liquidity with less capital. Our Just-in-Time (JIT) mechanism borrows assets on your behalf to facilitate large trades, allowing you to create a market up to 50x larger than your initial deposit.'
  },
  {
    icon: <SlidersHorizontal className='text-primary size-8' />,
    title: 'Take Full Control',
    description:
      'Move beyond standard liquidity pools. With your own EulerSwap instance, you can set custom fees, create asymmetric or single-sided liquidity curves, and execute sophisticated hedging strategies with total precision.'
  }
];

export const HowItWorksSection = () => (
  <section id='how-it-works' className='relative py-12'>
    <div
      aria-hidden='true'
      className='absolute inset-0 top-1/2 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
    >
      <div className='h-64 bg-gradient-to-br from-indigo-500 to-purple-500 blur-[106px] dark:from-indigo-700' />
      <div className='h-48 bg-gradient-to-r from-rose-400 to-orange-300 blur-[106px] dark:to-red-600' />
    </div>
    <div className='relative container mx-auto px-4'>
      <div className='mb-16 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
          Unleash True Capital Efficiency
        </h2>
        <p className='text-muted-foreground mx-auto mt-4 max-w-3xl md:text-lg'>
          EulerSwap integrates directly with Euler's lending vaults,
          transforming your deposited liquidity into a dynamic, multi-purpose
          asset. Provide liquidity once and unlock multiple streams of yield and
          utility.
        </p>
      </div>
      <div className='grid gap-8 md:grid-cols-3'>
        {features.map((feature) => (
          <div key={feature.title} className='group relative'>
            <div className='absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 opacity-10 blur-lg transition-all duration-700 group-hover:opacity-25' />
            <Card className='bg-background/80 relative h-full backdrop-blur-sm'>
              <CardHeader className='flex flex-row items-center gap-4 pb-4'>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{feature.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className='mt-8 text-center'>
        <Button size='lg' asChild>
          <Link to='/pools'>Explore Pools</Link>
        </Button>
      </div>
    </div>
  </section>
);
