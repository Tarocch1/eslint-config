import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts', './src/prettier.ts'],
  dts: true,
  // exports: true,
})
