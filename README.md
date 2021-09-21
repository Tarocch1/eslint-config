# Tarocch1's ESLint Config

[![npm](https://img.shields.io/npm/v/@tarocch1/eslint-config)](https://www.npmjs.com/package/@tarocch1/eslint-config)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@tarocch1/eslint-config)](https://bundlephobia.com/result?p=@tarocch1/eslint-config)
[![npm](https://img.shields.io/npm/dm/@tarocch1/eslint-config)](https://www.npmjs.com/package/@tarocch1/eslint-config)
[![GitHub](https://img.shields.io/github/license/tarocch1/eslint-config)](https://github.com/Tarocch1/eslint-config/blob/main/LICENSE)

## Install

```bash
npm install -D @tarocch1/eslint-config
```

## Usage

### For javascript

Basic javascript without typescript, react and vue.

#### Install

```bash
npm i -D eslint@^7.32.0 eslint-plugin-import@^2.24.2 prettier@^2.4.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0
```

#### .eslintrc.js

```js
module.exports = {
  extends: ['@tarocch1/eslint-config'],
}
```

### For typescript

Basic typescript without react and vue.

#### Install

```bash
npm i -D eslint@^7.32.0 @typescript-eslint/eslint-plugin@^4.31.1 @typescript-eslint/parser@^4.31.1 eslint-import-resolver-typescript@^2.5.0 eslint-plugin-import@^2.24.2 prettier@^2.4.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0
```

#### .eslintrc.js

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/typescript'],
}
```
