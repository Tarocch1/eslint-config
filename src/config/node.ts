import globals from 'globals'
import { type InfiniteDepthConfigWithExtends } from 'typescript-eslint'

import { CommonConfig, type CommonConfigOptions } from './common'

/**
 * Node 配置选项
 */
export type NodeConfigOptions = CommonConfigOptions

/**
 * Node 配置
 */
export const NodeConfig: (
  options?: NodeConfigOptions,
) => InfiniteDepthConfigWithExtends[] = (options) => [
  ...CommonConfig(options),
  { languageOptions: { globals: globals.node } },
]
