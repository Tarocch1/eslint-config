const fs = require('fs')
const path = require('path')
let prettierrc = require('../.prettierrc')

try {
  const userConfig = path.resolve('.prettierrc')
  prettierrc = JSON.parse(fs.readFileSync(userConfig, { encoding: 'utf8' }))
} catch (e) {
  //
}

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettierrc],
  },
}
