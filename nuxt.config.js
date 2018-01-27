const modules = [
  '@nuxtjs/pwa'
]
const isNotProdEnv = process.env.NODE_ENV !== 'production'
isNotProdEnv && modules.push('@nuxtjs/dotenv')

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    postcss: [// will fix bulma warning about column
      require('postcss-cssnext')({
        features: {
          customProperties: false
        }
      })
    ],
    analyze: process.env.ANALYZE,
    vendor: [
      'buefy',
      'firebase'
    ]
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules,
  plugins: [
    '~plugins/buefy',
    '~plugins/firebase'
  ]
}
