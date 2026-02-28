import type { UserConfig } from './index'

/**
 * 生成用户配置
 */
export function mergeUserConfigs(userConfigs: UserConfig[]): UserConfig[] {
  return [
    {
      files: ['!**/*.md'],
      rules: {
        'perfectionist/sort-imports': ['error', {
          newlinesBetween: 1,
        }],
      },
    },
    ...userConfigs,
  ]
}
