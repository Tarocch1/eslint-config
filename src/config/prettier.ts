import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'

/**
 * Prettier 配置
 */
export const PrettierConfig: () => InfiniteDepthConfigWithExtends[] = () => [
  eslintPluginPrettierRecommended,
]
