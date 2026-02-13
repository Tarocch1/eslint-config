import type { Options } from '.'

/**
 * 生成 rules 选项
 */
export function rulesOptions(option: Options['rules']): Options['rules'] {
  return {
    'perfectionist/sort-imports': ['error', {
      newlinesBetween: 1,
    }],
    ...option,
  }
}
