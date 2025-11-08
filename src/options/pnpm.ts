import type { Options } from '.'

/**
 * 生成 pnpm 选项
 */
export function pnpmOptions(option: Options['pnpm']): Options['pnpm'] {
  return option === undefined ? true : option
}
