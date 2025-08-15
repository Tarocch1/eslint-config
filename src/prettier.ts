import type { OptionsFormatters } from '@antfu/eslint-config'
import type { Options } from 'prettier'

/**
 * 默认 prettier 选项
 */
export const PrettierOptions: Omit<
  NonNullable<OptionsFormatters['prettierOptions']>,
  keyof Options
> & Options = {
  printWidth: 80, // 最大行宽
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 不使用 tab 缩进

  semi: false, // 不添加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象属性名按需添加引号
  jsxSingleQuote: false, // JSX 使用双引号
  trailingComma: 'all', // 尽量添加尾逗号
  bracketSpacing: true, // 括号内添加空格
  objectWrap: 'preserve', // 对象字面量不折叠
  bracketSameLine: false, // HTML `>` 符号换行
  arrowParens: 'always', // 箭头函数参数始终添加括号

  rangeStart: 0, // 处理范围开始
  rangeEnd: Infinity, // 处理范围结束
  requirePragma: false, // 无需注释
  insertPragma: false, // 不插入注释
  checkIgnorePragma: true, // 检查忽略注释

  proseWrap: 'preserve', // 不处理 markdown 换行
  htmlWhitespaceSensitivity: 'ignore', // 忽略 HTML 空格
  vueIndentScriptAndStyle: false, // 不缩进 Vue 文件的 script 和 style
  endOfLine: 'lf', // 换行符使用 LF
  embeddedLanguageFormatting: 'auto', // 处理嵌入的语言格式
  singleAttributePerLine: false, // HTML 一行多个参数

  experimentalOperatorPosition: 'end', // 实验性操作符位置
  experimentalTernaries: false, // 实验性三元表达式
}
