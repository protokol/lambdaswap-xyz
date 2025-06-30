import {
  RainbowKitProvider as RainbowKitProviderComponent,
  lightTheme
} from '@rainbow-me/rainbowkit';
import type { ComponentProps } from 'react';

const rainbowKitConfig: Omit<
  ComponentProps<typeof RainbowKitProviderComponent>,
  'children'
> = {
  modalSize: 'compact',
  appInfo: {
    appName: 'LambdaSwap'
  },
  theme: lightTheme({
    accentColor: 'var(--color-accent)',
    accentColorForeground: 'var(--color-accent-foreground)'
  })
};

type RainbowKitProviderProviderProps = {
  children: React.ReactNode;
};

export function RainbowKitProvider({
  children
}: RainbowKitProviderProviderProps) {
  return (
    <RainbowKitProviderComponent {...rainbowKitConfig}>
      {children}
    </RainbowKitProviderComponent>
  );
}

export default RainbowKitProvider;
