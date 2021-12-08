module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    './rules/import-typescript.js',
    './rules/prettier.js',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
}
