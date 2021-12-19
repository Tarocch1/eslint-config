module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    './rules/import.js',
    './rules/vue.js',
    './rules/prettier.js',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
