module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true
   },
   extends: [
      'plugin:react/recommended',
      'standard'
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   plugins: [
      'react'
   ],
   rules: {
      indent: ['error', 3]
   }
}
