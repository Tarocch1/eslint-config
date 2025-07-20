import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * Prettier 配置
 */
export const PrettierConfig: InfiniteDepthConfigWithExtends[] = [
  eslintPluginPrettierRecommended,
]
