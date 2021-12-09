module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {},
      typescript: {},
    },
  },
}
