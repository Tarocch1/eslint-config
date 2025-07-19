import globals from 'globals'
import { type InfiniteDepthConfigWithExtends } from 'typescript-eslint'

import { CommonConfig } from './common'

/**
 * Node 配置
 */
export const NodeConfig: InfiniteDepthConfigWithExtends[] = [
  ...CommonConfig,
  { languageOptions: { globals: globals.node } },
]
