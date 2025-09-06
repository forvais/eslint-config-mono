const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off', // We want to be able to use `type` or `interface` interchangably as both have their benefits
            '@typescript-eslint/no-require-imports': 'off', // Require imports are still desirable and I see no point in restricting them
        }
    }
);
