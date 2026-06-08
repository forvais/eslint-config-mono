import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    name: 'forvais/plugin/typescript-eslint/overrides',
    files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
    rules: {
      'class-methods-use-this': 'off', // overriden by 'typescript-eslint/class-methods-use-this'
      'default-param-last': 'off', // overriden by 'typescript-eslint/default-param-last'
      'dot-notation': 'off', // overriden by 'typescript-eslint/dot-notation'
      'no-array-constructor': 'off', // overriden by 'typescript-eslint/no-array-constructor'
      'no-dupe-class-members': 'off', // overriden by 'typescript-eslint/no-dupe-class-members'
      'no-implied-eval': 'off', // overriden by 'typescript-eslint/no-implied-eval'
      'no-shadow': 'off', // overriden by 'typescript-eslint/no-shadow'
      'no-unused-vars': 'off', // overriden by 'typescript-eslint/no-unused-vars'
    },
  },
  {
    name: 'forvais/plugin/typescript-eslint',
    files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    rules: {
      'typescript-eslint/adjacent-overload-signatures': 'error',
      'typescript-eslint/array-type': ['error', { default: 'array' }],
      'typescript-eslint/await-thenable': 'error',
      'typescript-eslint/ban-ts-comment': ['error', {
        'minimumDescriptionLength': 3,
        'ts-check': false,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      }],
      'typescript-eslint/ban-tslint-comment': 'off', // I don't use tslint :D
      'typescript-eslint/class-literal-property-style': ['error', 'fields'],
      'typescript-eslint/class-methods-use-this': ['error', {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: true,
      }],
      'typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
      'typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      'typescript-eslint/consistent-return': 'off',
      'typescript-eslint/consistent-type-assertions': ['error', {
        arrayLiteralTypeAssertions: 'allow-as-parameter',
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      }],
      'typescript-eslint/consistent-type-definitions': 'off', // We want to be able to use `type` or `interface` interchangably as both have their benefits
      'typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: false,
      }],
      'typescript-eslint/consistent-type-imports': ['error', {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      }],
      'typescript-eslint/default-param-last': 'error',
      'typescript-eslint/dot-notation': 'error',
      'typescript-eslint/explicit-function-return-type': 'off', // I don't want to enforce explicit return types
      'typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'explicit',
      }],
      'typescript-eslint/explicit-module-boundary-types': 'off',
      'typescript-eslint/init-declarations': 'off',
      'typescript-eslint/max-params': 'off',
      'typescript-eslint/member-ordering': 'error',
      'typescript-eslint/method-signature-style': ['error', 'method'],
      'typescript-eslint/naming-convention': 'off', // Seems nice but lots to configure  TODO: Enable this option
      'typescript-eslint/no-array-constructor': 'error',
      'typescript-eslint/no-array-delete': 'error',
      'typescript-eslint/no-base-to-string': 'error',
      'typescript-eslint/no-confusing-non-null-assertion': 'error',
      'typescript-eslint/no-confusing-void-expression': 'off', // Has conflicting rules, making this rule's usage ambiguous
      'typescript-eslint/no-deprecated': 'error',
      'typescript-eslint/no-dupe-class-members': 'error',
      'typescript-eslint/no-duplicate-enum-values': 'error',
      'typescript-eslint/no-duplicate-type-constituents': 'off', // Unsure if this also disallows explicit `undefined` type definitions for optional parameters, which I often do (and I'm too lazy to test)
      'typescript-eslint/no-dynamic-delete': 'error', //
      'typescript-eslint/no-empty-function': 'off',
      'typescript-eslint/no-empty-object-type': 'error',
      'typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true,
      }],
      'typescript-eslint/no-extra-non-null-assertion': 'error',
      'typescript-eslint/no-extraneous-class': 'error',
      'typescript-eslint/no-floating-promises': 'error',
      'typescript-eslint/no-for-in-array': 'error',
      'typescript-eslint/no-implied-eval': 'error',
      'typescript-eslint/no-import-type-side-effects': 'error',
      'typescript-eslint/no-inferrable-types': 'error',
      'typescript-eslint/no-invalid-this': 'off',
      'typescript-eslint/no-invalid-void-type': 'error',
      'typescript-eslint/no-loop-func': 'error',
      'typescript-eslint/no-magic-numbers': 'off',
      'typescript-eslint/no-meaningless-void-operator': 'error',
      'typescript-eslint/no-misused-new': 'error',
      'typescript-eslint/no-misused-promises': 'off', // Not entirely confident how this works yet in actual code
      'typescript-eslint/no-misused-spread': 'error',
      'typescript-eslint/no-mixed-enums': 'error',
      'typescript-eslint/no-namespace': 'error',
      'typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      'typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      'typescript-eslint/no-non-null-assertion': 'error',
      'typescript-eslint/no-redeclare': 'off',
      'typescript-eslint/no-redundant-type-constituents': 'error',
      'typescript-eslint/no-require-imports': 'off', // Require imports are still desirable and I see no point in restricting them
      'typescript-eslint/no-restricted-imports': 'off',
      'typescript-eslint/no-restricted-types': 'off',
      'typescript-eslint/no-shadow': 'error',
      'typescript-eslint/no-this-alias': 'error',
      'typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      'typescript-eslint/no-unnecessary-condition': 'error',
      'typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      'typescript-eslint/no-unnecessary-qualifier': 'error',
      'typescript-eslint/no-unnecessary-template-expression': 'error',
      'typescript-eslint/no-unnecessary-type-arguments': 'error',
      'typescript-eslint/no-unnecessary-type-assertion': 'error',
      'typescript-eslint/no-unnecessary-type-constraint': 'error',
      'typescript-eslint/no-unnecessary-type-conversion': 'error',
      'typescript-eslint/no-unnecessary-type-parameters': 'error',
      'typescript-eslint/no-unsafe-argument': 'error',
      'typescript-eslint/no-unsafe-assignment': 'error',
      'typescript-eslint/no-unsafe-call': 'error',
      'typescript-eslint/no-unsafe-declaration-merging': 'error',
      'typescript-eslint/no-unsafe-enum-comparison': 'error',
      'typescript-eslint/no-unsafe-function-type': 'error',
      'typescript-eslint/no-unsafe-member-access': 'error',
      'typescript-eslint/no-unsafe-return': 'error',
      'typescript-eslint/no-unsafe-type-assertion': 'off', // By using type casting, the developer acknowledges they are bypassing the type system
      'typescript-eslint/no-unsafe-unary-minus': 'error',
      'typescript-eslint/no-unused-expressions': 'error',
      'typescript-eslint/no-unused-private-class-members': 'error',
      'typescript-eslint/no-unused-vars': 'error',
      'typescript-eslint/no-use-before-define': 'error',
      'typescript-eslint/no-useless-constructor': 'error',
      'typescript-eslint/no-useless-default-assignment': 'error',
      'typescript-eslint/no-useless-empty-export': 'error',
      'typescript-eslint/no-wrapper-object-types': 'error',
      'typescript-eslint/non-nullable-type-assertion-style': 'error',
      'typescript-eslint/only-throw-error': 'error',
      'typescript-eslint/parameter-properties': 'error',
      'typescript-eslint/prefer-as-const': 'error',
      'typescript-eslint/prefer-destructuring': 'error',
      'typescript-eslint/prefer-enum-initializers': 'error',
      'typescript-eslint/prefer-find': 'error',
      'typescript-eslint/prefer-for-of': 'error',
      'typescript-eslint/prefer-function-type': 'error',
      'typescript-eslint/prefer-includes': 'error',
      'typescript-eslint/prefer-literal-enum-member': 'error',
      'typescript-eslint/prefer-namespace-keyword': 'error',
      'typescript-eslint/prefer-nullish-coalescing': 'error',
      'typescript-eslint/prefer-optional-chain': 'error',
      'typescript-eslint/prefer-promise-reject-errors': 'error',
      'typescript-eslint/prefer-readonly': 'off',
      'typescript-eslint/prefer-readonly-parameter-types': 'off',
      'typescript-eslint/prefer-reduce-type-parameter': 'error',
      'typescript-eslint/prefer-regexp-exec': 'error',
      'typescript-eslint/prefer-return-this-type': 'error',
      'typescript-eslint/prefer-string-starts-ends-with': 'error',
      'typescript-eslint/promise-function-async': 'error',
      'typescript-eslint/related-getter-setter-pairs': 'error',
      'typescript-eslint/require-array-sort-compare': 'error',
      'typescript-eslint/require-await': 'off',
      'typescript-eslint/restrict-plus-operands': 'error',
      'typescript-eslint/restrict-template-expressions': 'error',
      'typescript-eslint/return-await': 'error',
      'typescript-eslint/strict-boolean-expressions': 'error',
      'typescript-eslint/strict-void-return': 'off',
      'typescript-eslint/switch-exhaustiveness-check': 'error',
      'typescript-eslint/triple-slash-reference': 'error',
      'typescript-eslint/unbound-method': 'error',
      'typescript-eslint/unified-signatures': 'error',
      'typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    },
  },
);
