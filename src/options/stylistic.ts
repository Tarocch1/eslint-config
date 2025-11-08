import type { Options } from '.'

/**
 * 生成 stylistic 选项
 */
export function stylisticOptions(option: Options['stylistic']): Options['stylistic'] {
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
