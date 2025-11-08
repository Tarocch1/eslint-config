import type antfu from '@antfu/eslint-config'

import { formattersOptions } from './formatters'
import { pnpmOptions } from './pnpm'
import { rulesOptions } from './rules'
import { stylisticOptions } from './stylistic'
import { vueOptions } from './vue'

/**
 * 选项
 */
export type Options = NonNullable<Parameters<typeof antfu>[0]>

/**
 * 生成 @antfu/eslint-config 选项
 */
export function option(options: Options = {}) {
  const { pnpm, vue, stylistic, formatters, rules, ...rest } = options

  const result: Parameters<typeof antfu>[0] = { ...rest }

  result.pnpm = pnpmOptions(pnpm)
  result.vue = vueOptions(vue)
  result.stylistic = stylisticOptions(stylistic)
  result.formatters = formattersOptions(formatters)
  result.rules = rulesOptions(rules)

  return result
}
