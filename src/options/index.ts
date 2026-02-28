import type antfu from '@antfu/eslint-config'

import { mergeUserConfigs } from './configs'
import { formattersOptions } from './formatters'
import { pnpmOptions } from './pnpm'
import { stylisticOptions } from './stylistic'
import { vueOptions } from './vue'

/**
 * 选项
 */
export type Options = NonNullable<Parameters<typeof antfu>[0]>
/**
 * 用户配置
 */
export type UserConfig = Parameters<typeof antfu>[1]

/**
 * 生成 @antfu/eslint-config 选项
 */
export function option(options: Options = {}, ...userConfigs: UserConfig[]): [Options, ...UserConfig[]] {
  const { pnpm, vue, stylistic, formatters, ...rest } = options

  const result: Parameters<typeof antfu>[0] = { ...rest }

  result.pnpm = pnpmOptions(pnpm)
  result.vue = vueOptions(vue)
  result.stylistic = stylisticOptions(stylistic)
  result.formatters = formattersOptions(formatters)

  return [result, ...mergeUserConfigs(userConfigs)]
}
