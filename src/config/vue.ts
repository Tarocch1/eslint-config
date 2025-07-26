import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tseslint, {
  type InfiniteDepthConfigWithExtends,
} from 'typescript-eslint'

import { CommonConfig } from './common'

/**
 * Vue 配置
 */
export const VueConfig: InfiniteDepthConfigWithExtends[] = [
  ...CommonConfig,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
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
