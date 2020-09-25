module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prefer-arrow-callback': 'off',
    'func-name': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error'
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
