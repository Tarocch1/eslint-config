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

```js
module.exports = {
  extends: ['@tarocch1/eslint-config'],
}
```

### For typescript

Basic typescript without react and vue.

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/typescript'],
}
```

### For React (JavaScript)

Basic javascript with react.

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/react'],
}
```

### For React (TypeScript)

Basic typescript with react.

```js
module.exports = {
  extends: ['@tarocch1/eslint-config/react-typescript'],
}
```

### For Vue (JavaScript)

Basic javascript with vue.

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
