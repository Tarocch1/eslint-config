import type antfu from '@antfu/eslint-config'

import { PrettierOptions } from './prettier'

/**
 * 选项
 */
export type Options = NonNullable<Parameters<typeof antfu>[0]>

/**
 * 生成 pnpm 选项
 */
function pnpmOption(option: Options['pnpm']): Options['pnpm'] {
  return option === undefined ? true : option
}

/**
 * 生成 vue 选项
 */
function vueOptions(option: Options['vue']): Options['vue'] {
  if (option === false) {
    return false
  }

  const { overrides, ...rest } = typeof option === 'object' ? option : {}
  return {
    ...rest,
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
      ...overrides,
    },
  }
}

/**
 * 生成 stylistic 选项
 */
function stylisticOptions(option: Options['stylistic']): Options['stylistic'] {
  if (option === false) {
    return false
  }

  const _option = typeof option === 'object' ? option : {}
  return {
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    ..._option,
  }
}

/**
 * 生成 formatters 选项
 */
function formattersOptions(
  option: Options['formatters'],
): Options['formatters'] {
  if (option === false) {
    return false
  }

  const { css, html, markdown, prettierOptions, ...rest }
    = typeof option === 'object' ? option : {}
  return {
    css: css === false ? false : 'prettier',
    html: html === false ? false : 'prettier',
    markdown: markdown === false ? false : 'prettier',
    prettierOptions: {
      ...PrettierOptions,
      ...prettierOptions,
    },
    ...rest,
  }
}

/**
 * 生成 rules 选项
 */
function rulesOptions(option: Options['rules']): Options['rules'] {
  return {
    'perfectionist/sort-imports': ['error', {
      newlinesBetween: 'always',
    }],
    ...option,
  }
}

/**
 * 生成 @antfu/eslint-config 选项
 */
export function option(options: Options = {}) {
  const { pnpm, vue, stylistic, formatters, rules, ...rest } = options

  const result: Parameters<typeof antfu>[0] = { ...rest }

  result.pnpm = pnpmOption(pnpm)
  result.vue = vueOptions(vue)
  result.stylistic = stylisticOptions(stylistic)
  result.formatters = formattersOptions(formatters)
  result.rules = rulesOptions(rules)

  return result
}
