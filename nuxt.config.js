export default {
  // Nuxt.js application configuration
  
  head: {
    title: 'NEFA',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS files
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  
  // Plugins to load before mounting the app
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  
  // Auto import components
  components: true,
  
  // Build modules for development
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  
  // Nuxt.js modules
  modules: [],
  
  // Build configuration
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
  // Target should be 'static' for static site generation
  target: 'static',
  
  // Custom build directory (if needed, uncomment if using custom build dir)
  // buildDir: 'nuxt-dist',
}
