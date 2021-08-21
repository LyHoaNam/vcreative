export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vCreative',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-signin-client_id',
        content:
          '1051508446752-0f5gg4vgc4tni60n96m5c6vp39cp7lmd.apps.googleusercontent.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/swiper.js' }, { src: '~/plugins/modal.js' }],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
        },
      },
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: '558339925417449',
        scope: ['public_profile', 'email'],
      },
      google: {
        clientId:
          '1051508446752-0f5gg4vgc4tni60n96m5c6vp39cp7lmd.apps.googleusercontent.com',
        audience: 'http://localhost:3000',
        scope: ['openid', 'profile', 'email', 'offline_access'],
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/services',
      home: '/services',
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  router: {
    // middleware: ['auth'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
