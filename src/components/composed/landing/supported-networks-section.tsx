import { NetworkEthereum, NetworkUnichain } from '@web3icons/react';

const networks = [
  {
    name: 'Ethereum',
    icon: <NetworkEthereum variant='branded' size='32' />
  },
  {
    name: 'Unichain',
    icon: <NetworkUnichain variant='branded' size='32' />
  }
];

export const SupportedNetworksSection = () => (
  <section id='networks' className='-mt-12 pb-20 md:pb-28'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='text-muted-foreground text-sm'>Available on</p>
        <div className='flex items-center justify-center gap-6'>
          {networks.map((network) => (
            <div key={network.name} className='flex items-center gap-2.5'>
              {network.icon}
              <span className='text-sm font-medium'>{network.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
