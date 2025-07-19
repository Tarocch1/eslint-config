import eslint from '@eslint/js'
import tseslint, {
  type InfiniteDepthConfigWithExtends,
} from 'typescript-eslint'

/**
 * 通用配置
 */
export const CommonConfig: InfiniteDepthConfigWithExtends[] = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]
