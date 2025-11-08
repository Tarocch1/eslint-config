import type { Options } from '.'

/**
 * 生成 vue 选项
 */
export function vueOptions(option: Options['vue']): Options['vue'] {
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
