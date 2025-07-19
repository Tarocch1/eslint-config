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

### For Typescript

```ts
import { config, CommonConfig } from '@tarocch1/eslint-config'

export default config({ files: ['**/*.{js,ts}'], extends: CommonConfig })
```

### For Node

```ts
import { config, NodeConfig } from '@tarocch1/eslint-config'

export default config({ files: ['**/*.{js,ts}'], extends: NodeConfig })
```

### For Vue

```ts
import { config, VueConfig } from '@tarocch1/eslint-config'

export default config({
  files: ['**/*.{js,jsx,ts,tsx,vue}'],
  extends: VueConfig,
})
```

### Prettier

```ts
// prettier.config.js

export { PrettierRules as default } from '@tarocch1/eslint-config'
```

```ts
// eslint.config.ts

import { config, CommonConfig, PrettierConfig } from '@tarocch1/eslint-config'

export default config(
  { files: ['**/*.{js,ts}'], extends: CommonConfig },
  ...PrettierConfig,
)
```
