module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['warn', 'always'],
    quotes: ['error', 'single'],
    'no-useless-catch': 'off',
    'vue/no-v-html': 2,
    'no-irregular-whitespace': ['error', { 'skipComments': true }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }]
  }
}
