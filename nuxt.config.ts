// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/fontaine'],

  image: {
    provider: 'none',
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },

  nitro: {
    preset: 'node-server',
    serveStatic: true
  },

  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  future: {
    compatibilityVersion: 4
  },

  vite: {
    build: {
      sourcemap: false
    }
  },
  sourcemap: {
    server: false,
    client: false
  },
})