const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - Nuxt PWA TailwindCSS Demo`
      }
      return 'Nuxt PWA TailwindCSS Demo'
    }
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'

    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  // https://nuxtjs.org/api/configuration-watch/
  watch: ['~/constants/**/*.js', '~/utils/**/*.js'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  pwa: {
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      name: 'Nuxt PWA TailwindCSS Demo',
      description: 'Nuxt PWA TailwindCSS Demo',
      lang: 'id',
      ogHost: 'https://nuxt-pwa-tailwindcss-demo.netlify.app',
      twitterCard: 'summary_large_image',
      twitterSite: '@jefrydco',
      twitterCreator: '@jefrydco'
    },

    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
      name: 'Nuxt PWA TailwindCSS Demo',
      short_name: 'Nuxt PWA TailwindCSS Demo',
      start_url: '/?utm_source=homescreen',
      description: 'Nuxt PWA TailwindCSS Demo',
      lang: 'id',
      background_color: '#38b2ac',
      theme_color: '#38b2ac'
    }
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://api.themoviedb.org/3/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://image.tmdb.org/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  },

  /**
   * Server Middleware
   * https://nuxtjs.org/api/configuration-servermiddleware
   */
  serverMiddleware: {
    '/api': '~/api'
  },

  /**
   * Tailwind CSS configuration
   */
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  // https://github.com/nuxt-community/stylelint-module
  stylelint: {
    fix: true
  },

  // https://nuxtjs.org/api/configuration-plugins
  plugins: ['~/plugins/components', '~/plugins/components.client'],

  // https://nuxtjs.org/api/configuration-css
  css: [],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
