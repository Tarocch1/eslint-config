import { config, NodeConfig, PrettierConfig } from './src/index'

export default config(
  { files: ['**/*.{js,ts}'] },
  { ignores: ['dist'] },
  { files: ['**/*.{js,ts}'], extends: NodeConfig },
  ...PrettierConfig,
)
