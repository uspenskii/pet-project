export default {
  server: {
    port: process.env.PORT,
  },
  target: 'server',
  ssr: process.env.SSR !== 'false',

  head: {
    title: 'sangarant-nuxt',
    htmlAttrs: {
      lang: 'ru-RU',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.svg' }],
    bodyAttrs: {
      class: 'body',
    },
  },

  buildModules: ['nuxt-compress'],

  css: ['@/assets/styles/style.scss'],

  styleResources: {
    scss: ['@/assets/styles/variables.scss'],
  },

  plugins: [
    { src: '~/plugins/plugins.js', mode: 'client' }
    , '~plugins/api.js',
    { src: '~plugins/vuelidate.js', ssr: true },
    { src: '~plugins/vuex-shared-mutations.js', ssr: false },
  ],

  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyCGp6pOLSkRpcCD_AGJ4c9dlRZaHcuT9gs',
      },
    ],
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': process.env.API_URL,
  },

  build: {},
}
