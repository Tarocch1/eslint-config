import eslint from '@eslint/js'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import {
  configs as tseslintConfigs,
  type InfiniteDepthConfigWithExtends,
} from 'typescript-eslint'

/**
 * 通用配置选项
 */
export type CommonConfigOptions = {
  /**
   * import 插件选项
   */
  import?: {
    /** 是否启用 import 插件 */
    enable?: boolean
    /** 指定 tsconfig.json 路径 */
    project?: string | string[]
  }
}

/**
 * 通用配置
 */
export const CommonConfig: (
  options?: CommonConfigOptions,
) => InfiniteDepthConfigWithExtends[] = (options) =>
  [
    eslint.configs.recommended,
    tseslintConfigs.recommended,
    options?.import?.enable !== false
      ? ([
          importX.flatConfigs.recommended,
          importX.flatConfigs.typescript,
          {
            settings: {
              'import-x/resolver-next': [
                createTypeScriptImportResolver({
                  alwaysTryTypes: true,
                  project: options?.import?.project,
                }),
              ],
            },
            rules: {
              'import-x/order': [
                'error',
                {
                  groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                  ],
                  'newlines-between': 'always',
                  named: true,
                  alphabetize: { order: 'asc', caseInsensitive: true },
                },
              ],
            },
          },
        ] satisfies InfiniteDepthConfigWithExtends)
      : [],
  ].filter(Boolean)
