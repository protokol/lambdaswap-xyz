import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  reactHooks.configs['recommended-latest'],
  {
    // Exclude dist directory from linting
    ignores: ['**/dist/**', '**/node_modules/**', '**/gql/**']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'unused-imports': unusedImportsPlugin
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Disabled indent rule as it is handled by Prettier
      indent: 'off',
      // Forces line endings to be consistent
      'linebreak-style': ['error', 'unix'],
      // Forces single quotes
      quotes: ['error', 'single', { avoidEscape: true }],
      // Forces semicolon at the end of the statement
      semi: 'warn',
      // Prevent unnecessary curly braces when not needed
      'react/jsx-curly-brace-presence': 'warn',
      // Disabled rule for using JSX without importing React
      'react/react-in-jsx-scope': 'off',
      // Shortens return statement from arrow functions
      'arrow-body-style': 'warn',
      // Forces to use shorthand syntax for truthy prop values
      'react/jsx-boolean-value': 'warn',
      // Tags that don't have children must be self-closing
      'react/self-closing-comp': 'warn',
      // PropTypes are not required in TypeScript
      'react/prop-types': 'off',
      // Prevents console.log statements from being committed
      'no-console': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'react/no-unescaped-entities': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'unused-imports': unusedImportsPlugin,
      '@typescript-eslint': tseslintPlugin
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json',
        tsconfigRootDir: '.'
      }
    },
    rules: {
      // Disabled indent rule as it is handled by Prettier
      indent: 'off',
      // Forces line endings to be consistent
      'linebreak-style': ['error', 'unix'],
      // Forces single quotes
      quotes: ['error', 'single', { avoidEscape: true }],
      // Forces semicolon at the end of the statement
      semi: 'warn',
      // Prevent unnecessary curly braces when not needed
      'react/jsx-curly-brace-presence': 'warn',
      // Disabled rule for using JSX without importing React
      'react/react-in-jsx-scope': 'off',
      // Shortens return statement from arrow functions
      'arrow-body-style': 'warn',
      // Forces to use shorthand syntax for truthy prop values
      'react/jsx-boolean-value': 'warn',
      // Tags that don't have children must be self-closing
      'react/self-closing-comp': 'warn',
      // PropTypes are not required in TypeScript
      'react/prop-types': 'off',
      // Prevents console.log statements from being committed
      'no-console': 'warn',
      // Prevents `any` type from being used
      '@typescript-eslint/no-explicit-any': 'error',
      // Enforces "import type" syntax
      '@typescript-eslint/consistent-type-imports': 'error',
      // Prevents `var` keyword from being used
      '@typescript-eslint/no-var-requires': 'off',
      // Prevents unused variables from being committed
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true }
      ],
      'unused-imports/no-unused-imports': 'error',
      'react/no-unescaped-entities': 'off'
    }
  }
];

export default eslintConfig;
