module.exports = {
  env: {
    browser: true,
  },
  extends: ['./typescript.js', './rules/vue3.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
}
