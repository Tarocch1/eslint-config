import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import {
  type InfiniteDepthConfigWithExtends,
  parser as tseslintParser,
} from 'typescript-eslint'

import { CommonConfig, type CommonConfigOptions } from './common'

/**
 * Vue 配置选项
 */
export type VueConfigOptions = CommonConfigOptions

/**
 * Vue 配置
 */
export const VueConfig: (
  options?: VueConfigOptions,
) => InfiniteDepthConfigWithExtends[] = (options) => [
  ...CommonConfig(options),
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslintParser,
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // 允许单个单词的组件名
      'vue/multi-word-component-names': 'off',
      // 允许修改 props
      'vue/no-mutating-props': 'off',
      // 允许使用 v-html
      'vue/no-v-html': 'off',
    },
  },
]
