import reportWebVitals from './reportWebVitals.ts';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Toaster } from '@ui/toaster/toaster';

import RainbowKitProvider from '@composed/providers/rainbow-kit.provider';
import ReactQueryProvider from '@composed/providers/react-query.provider';
import { WagmiProvider } from '@composed/providers/wagmi.provider';

import { queryClient } from '@lib/configs/react-query.config';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
  interface RouterContext {
    queryClient: typeof queryClient;
  }
}

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <WagmiProvider>
        <ReactQueryProvider>
          <RainbowKitProvider>
            <RouterProvider router={router} />
            <Toaster />
          </RainbowKitProvider>
        </ReactQueryProvider>
      </WagmiProvider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
