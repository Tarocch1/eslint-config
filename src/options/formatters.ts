import type { Options } from '.'

import { PrettierOptions } from '../prettier'

/**
 * 生成 formatters 选项
 */
export function formattersOptions(
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
