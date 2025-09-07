const globals = require('globals');

const base = require('./packages/base/index');

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...base,
];
