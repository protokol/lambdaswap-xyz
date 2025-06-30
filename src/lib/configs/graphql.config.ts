import type {
  ResultOf,
  TypedDocumentNode,
  VariablesOf
} from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import type { OperationDefinitionNode } from 'graphql';
import type { RequestDocument, Variables } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
import { useChainId } from 'wagmi';

import type { TUseQueryOptions } from '@lib/configs/react-query.config';

export const graphQLConfig: Record<number, { uri: string }> = {
  1: {
    uri: 'https://api.goldsky.com/api/public/project_cm4iagnemt1wp01xn4gh1agft/subgraphs/euler-v2-mainnet/1.0.6/gn'
  },
  130: {
    uri: 'https://api.goldsky.com/api/public/project_cm4iagnemt1wp01xn4gh1agft/subgraphs/euler-v2-unichain/1.0.2/gn'
  }
};

export const graphQLClient = new GraphQLClient(graphQLConfig[1].uri);

export const useGraphql = <TResult, TVariables extends Variables>(
  document: RequestDocument | TypedDocumentNode<TResult, TVariables>,
  variables?: VariablesOf<TypedDocumentNode<TResult, TVariables>>,
  config?: TUseQueryOptions<ResultOf<TypedDocumentNode<TResult, TVariables>>>
) => {
  const chainId = useChainId();

  const graphQLClient = new GraphQLClient(
    graphQLConfig[chainId].uri || graphQLConfig[1].uri
  );

  return useQuery({
    ...config,
    queryKey: [getGrapqlDocumentName(document), variables],
    queryFn: () => graphQLClient.request<TResult>(document, variables)
  });
};

export const getGrapqlDocumentName = <TResult, TVariables extends Variables>(
  document: RequestDocument | TypedDocumentNode<TResult, TVariables>
): string | undefined => {
  if (
    typeof document === 'string' ||
    !document ||
    !('kind' in document) ||
    document.kind !== 'Document'
  ) {
    throw new Error('Invalid document');
  }

  const operationDefinition = document.definitions.find(
    (def): def is OperationDefinitionNode => def.kind === 'OperationDefinition'
  );
  return operationDefinition?.name?.value;
};
