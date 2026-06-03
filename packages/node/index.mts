import { defineConfig, type Config } from 'eslint/config';

import n from 'eslint-plugin-n';

// fake change

const rules: Config['rules'] = {
  'n/no-extraneous-import': 'off',
  'n/no-extraneous-require': 'off',
  'n/no-unpublished-import': 'off',
  'n/no-unpublished-require': 'off',
};

export default defineConfig(
  {
    name: 'forvais/plugin/node',
    files: ['**/*.ts'],
    plugins: { n },
    extends: ['n/flat/recommended'],
    rules,
  },
  {
    name: 'forvais/plugin/node/mts',
    files: ['**/*.mts'],
    plugins: { n },
    extends: ['n/flat/recommended-module'],
    rules,
  },
  {
    name: 'forvais/plugin/node/cts',
    files: ['**/*.cts'],
    plugins: { n },
    extends: ['n/flat/recommended-script'],
    rules,
  },
);
