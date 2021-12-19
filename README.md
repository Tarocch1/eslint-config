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
npm i -D eslint@^8.4.1 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0
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
npm i -D eslint@^8.4.1 @typescript-eslint/eslint-plugin@^5.6.0 @typescript-eslint/parser@^5.6.0 eslint-import-resolver-typescript@^2.5.0 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0
```

#### .eslintrc.js

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/typescript'],
}
```

### For React (JavaScript)

Basic javascript with react.

#### Install

```bash
npm i -D eslint@^8.4.1 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0 eslint-plugin-react@^7.27.1
```

#### .eslintrc.js

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/react'],
}
```

### For React (TypeScript)

Basic typescript with react.

#### Install

```bash
npm i -D eslint@^8.4.1 @typescript-eslint/eslint-plugin@^5.6.0 @typescript-eslint/parser@^5.6.0 eslint-import-resolver-typescript@^2.5.0 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0 eslint-plugin-react@^7.27.1
```

#### .eslintrc.js

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/react-typescript'],
}
```

### For Vue (JavaScript)

Basic javascript with vue.

#### Install

```bash
npm i -D eslint@^8.4.1 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0 eslint-plugin-vue@^8.2.0
```

#### .eslintrc.js

```js
// vue2
module.exports = {
  extends: ['@tarocch1/eslint-config/vue'],
}

// vue3
module.exports = {
  extends: ['@tarocch1/eslint-config/vue3'],
}
```

### For Vue (TypeScript)

Basic typescript with vue.

#### Install

```bash
npm i -D eslint@^8.4.1 @typescript-eslint/eslint-plugin@^5.6.0 @typescript-eslint/parser@^5.6.0 eslint-import-resolver-typescript@^2.5.0 eslint-plugin-import@^2.25.3 prettier@^2.5.1 eslint-plugin-prettier@^4.0.0 eslint-config-prettier@^8.3.0 eslint-plugin-vue@^8.2.0
```

#### .eslintrc.js

```js
// vue2
module.exports = {
  extends: ['@tarocch1/eslint-config/vue-typescript'],
}

// vue3
module.exports = {
  extends: ['@tarocch1/eslint-config/vue3-typescript'],
}
```
