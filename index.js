module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', './rules/import.js', './rules/prettier.js'],
}
