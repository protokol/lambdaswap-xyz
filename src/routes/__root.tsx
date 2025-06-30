import {
  Outlet,
  Scripts,
  createRootRouteWithContext
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { LandingHeader } from '@composed/landing/landing-header';

import type { queryClient } from '@lib/configs/react-query.config';

type RouterContext = {
  queryClient: typeof queryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  scripts: () => [
    {
      src: 'https://unpkg.com/react-scan/dist/auto.global.js',
      async: true
    }
  ],
  head: () => ({
    meta: [
      {
        title: 'Lambda Swap'
      },
      {
        name: 'description',
        content: 'Manage Liquidity and Swap Tokens on Lambda Swap'
      }
    ]
  }),
  component: RootComponent
});

function RootComponent() {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <Scripts />
      <TanStackRouterDevtools />
    </>
  );
}
