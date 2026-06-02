// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'

interface Post { slug: string }
const posts: Post[] = JSON.parse(readFileSync('./public/data/posts.json', 'utf-8'))

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID,
      siteUrl: 'https://tiagobernardes.com.br'
    }
  },
  pages: true,
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
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
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/posts',
        '/portfolio',
        '/sitemap.xml',
        ...posts.map(p => `/blog/${p.slug}`),
      ]
    }
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { property: 'og:site_name', content: 'Tiago Bernardes' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
      ],
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