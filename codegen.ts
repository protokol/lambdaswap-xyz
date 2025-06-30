import { graphQLConfig } from './src/lib/configs/graphql.config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: graphQLConfig[1].uri,
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
};
export default config;
