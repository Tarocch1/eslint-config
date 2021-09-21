# Tarocch1's ESLint Config

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
