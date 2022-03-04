module.exports = {
  plugins: ['prettier', 'jest'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'eslint:recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      // Keep this in sync with /.prettierrc so we don't need a build step.
      // The prettier config shouldn't change much anyway
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'lf',
        semi: false
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 0, // we assume we do not use *.jsx files
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'warn',
    'no-underscore-dangle': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'warn',
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/forbid-prop-types': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-param-reassign': 0 // fixed serviceWorker.js
  },
  env: {
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'shared-node-browser': true
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'jest/expect-expect': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'warn',
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error'
      }
    }
  ]
}
