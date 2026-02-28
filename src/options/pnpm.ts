import type { Options } from '.'

/**
 * 生成 pnpm 选项
 */
export function pnpmOptions(option: Options['pnpm']): Options['pnpm'] {
  if (option === false) {
    return false
  }

  const _option = typeof option === 'object' ? option : {}
  return {
    catalogs: true,
    json: true,
    yaml: true,
    sort: true,
    ..._option,
  }
}
