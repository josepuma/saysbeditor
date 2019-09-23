const backend_url = process.env.backend_url || 'http://localhost:1337'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'uikit/dist/css/uikit.css',
    '@/assets/styles/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~/plugins/uikit.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/#getting-started
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': { target: backend_url, pathRewrite: {'^/api/': ''} }
  },
  auth: {
    strategies: {
      local: false,
      osu: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://osu.ppy.sh/oauth/authorize',
        userinfo_endpoint: '/api/oauth/osu/@me',
        scope: ['identify'],
        access_type: 'offline',
        access_token_endpoint: '/api/oauth/osu/token',
        response_type: 'code',
        grant_type:'authorization_code',
        tokenType: 'Bearer',
        redirect_uri: process.env.osu_oauth_redirect_uri || 'http://localhost:3000/login',
        client_id: process.env.osu_oauth_client_id ||169,
      },
      discord: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://discordapp.com/api/oauth2/authorize',
        userinfo_endpoint: '/api/oauth/discord/@me',
        scope: ['identify', 'email'],
        access_type: 'offline',
        access_token_endpoint: '/api/oauth/discord/token',
        response_type: 'code',
        grant_type:'authorization_code',
        tokenType: 'Bearer',
        redirect_uri: process.env.osu_oauth_redirect_uri || 'http://localhost:3000/login',
        client_id: '625464734585454624',
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
