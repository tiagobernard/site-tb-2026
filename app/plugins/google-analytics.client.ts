export default defineNuxtPlugin(() => {
  const { public: { gaId } } = useRuntimeConfig()

  if (!gaId || import.meta.dev) return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `
      }
    ]
  })

  const router = useRouter()
  let initialNavigation = true

  router.afterEach((to) => {
    if (initialNavigation) {
      initialNavigation = false
      return
    }
    window.gtag?.('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title
    })
  })
})
