module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true
   },
   extends: ['plugin:react/recommended', 'standard'],
   parser: 'babel-eslint',
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   plugins: ['react'],
   rules: {
      indent: ['error', 3],
      'space-before-function-paren': [
         'error',
         {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
         }
      ],
      'comma-dangle': ['error', 'never'],
      'multiline-ternary': ['error', 'never']
   }
}
