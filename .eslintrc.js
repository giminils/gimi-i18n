/* eslint-disable import/no-commonjs */
module.exports = {
  root: true,
  extends: [
    'plugin:json/recommended',
    'eslint:recommended',
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@dword-design/eslint-plugin-import-alias/recommended',
    'prettier'
  ],
  plugins: ['import', 'unused-imports', 'promise', 'no-unused-react-component-methods', 'unicorn', 'react-native'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    es6: true,
    commonjs: true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx']
      }
    },
    'react': {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    },
    {
      files: ['./scripts/**'],
      extends: ['universe/node'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': 'off'
      }
    },
    {
      files: ['./**/__tests__/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        'jest/globals': true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        // We should probably turn this on at some point
        'jest/prefer-expect-assertions': 'off',
        'jest/consistent-test-it': ['warn', {fn: 'it', withinDescribe: 'it'}],
        'jest/no-conditional-expect': 'warn'
      }
    },
    {
      files: ['./**/__mocks__/**'],
      env: {
        'jest/globals': true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off'
      }
    }
  ],
  rules: {
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'curly': ['warn', 'all'],
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',

    // no unused vars or imports
    'import/no-unresolved': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'react-native/no-unused-styles': 'warn',
    'react/no-unused-class-component-methods': 'warn',

    // don't allow imports with extensions for js, ts, tsx
    'import/extensions': [
      'error',
      {
        png: 'always',
        svg: 'always',
        json: 'always',
        mp4: 'always',
        js: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    // turn off import/default since that is handled by @typescript-eslint
    'import/default': 'off',

    // default exports should be avoided: https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/no-default-export': 'warn',
    'import/prefer-default-export': 'off',

    // import order
    'sort-imports': 'off', // disable since it conflicts with import/order
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        'warnOnUnassignedImports': true,
        'groups': ['unknown', 'type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object']
      }
    ],

    // prefer absolute imports
    '@dword-design/import-alias/prefer-alias': ['warn', {alias: {'~': './src', '@i18n': './i18n'}}],

    // our preferred TypeScript rules that override the recommended rules
    // for arrays we prefer T[] for primitive names and type references and Array<T> for everything else
    '@typescript-eslint/array-type': ['warn', {default: 'array-simple'}],
    // for types import we import them with `import type {T}` and not `import {T}`
    '@typescript-eslint/consistent-type-imports': ['error'],
    // turn this rule off beacuse somethimes it's preferable to use `||`
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // do not inline callbacks
    'react/jsx-no-bind': ['warn', {ignoreRefs: true}],

    // promises
    // TODO: The following four should be errors and therefore removed (since we extend the recommended configuration where they are errors)
    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'off', // use unicorn/no-useless-promise-resolve-reject instead
    'promise/param-names': 'warn',
    'promise/catch-or-return': 'warn',
    'prefer-const': 'warn',

    // unicorn: https://github.com/sindresorhus/eslint-plugin-unicorn
    // disabled
    'unicorn/filename-case': 'off', // we don't use kebab-case
    'unicorn/no-null': 'off', // react uses null
    'unicorn/empty-brace-spaces': 'off', // controlled by prettier
    'unicorn/no-useless-undefined': 'off', // clashes with other rules
    // errors
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unsafe-regex': 'error',
    // warnings
    'unicorn/better-regex': 'warn',
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/error-message': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/no-array-method-this-argument': 'warn',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-instanceof-array': 'warn',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/no-useless-fallback-in-spread': 'warn',
    'unicorn/no-useless-length-check': 'warn',
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    'unicorn/no-useless-spread': 'warn',
    'unicorn/no-useless-switch-case': 'warn',
    // TODO: Evaluate these auto-fix rules later
    'unicorn/escape-case': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-new-array': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-zero-fractions': 'off',
    'unicorn/number-literal-case': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-array-find': 'off',
    'unicorn/prefer-array-flat': 'off',
    'unicorn/prefer-array-flat-map': 'off',
    'unicorn/prefer-array-index-of': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/prefer-negative-index': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/prefer-regexp-test': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-slice': 'off',
    'unicorn/prefer-string-starts-ends-with': 'off',
    'unicorn/prefer-string-trim-start-end': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-type-error': 'off',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/template-indent': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/throw-new-error': 'off',

    // TODO: Enable and fix when we have migrated to TypeScript
    'no-undef': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'react/prop-types': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'import/namespace': 'warn',
    'react/display-name': 'warn'
  }
}
