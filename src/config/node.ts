import globals from 'globals'
import eslint from '@eslint/js'
import tseslint, {
  type InfiniteDepthConfigWithExtends,
} from 'typescript-eslint'

/**
 * Node 配置
 */
export const NodeConfig: InfiniteDepthConfigWithExtends[] = [
  ...[eslint.configs.recommended, ...tseslint.configs.recommended],
  { languageOptions: { globals: globals.node } },
]
