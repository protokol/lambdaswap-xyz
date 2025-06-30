'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

import { queryClient } from '@lib/configs/react-query.config';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryProvider;
