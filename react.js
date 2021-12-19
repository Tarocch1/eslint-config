module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    './rules/import.js',
    './rules/react.js',
    './rules/prettier.js',
  ],
}
