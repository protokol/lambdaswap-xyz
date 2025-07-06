import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false
    }
  }
});

export const invalidateQueryKeys = async (queryKey: unknown | unknown[]) => {
  const keys = Array.isArray(queryKey) ? queryKey : [queryKey];

  await queryClient.invalidateQueries({
    queryKey: keys
  });
};

// Mainly user for custom react-query hooks where queryKey is already defined in the hook
export type TUseQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>;
