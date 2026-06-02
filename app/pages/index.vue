<template>
  <div>
    <AppHero />
    <AppTechStack />
    <AppServices />
    <AppPortfolio preview />
    <AppBlog />
    <AppContact />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const SITE_URL = config.public.siteUrl as string

useSeoMeta({
  title: 'Tiago Bernardes | Especialista em Web Performance & GenAI',
  description: 'Desenvolvedor Full Stack e Especialista em Inteligência Artificial. Arquitetura de sistemas escaláveis e soluções de GenAI para alta performance digital.',
  ogTitle: 'Tiago Bernardes | Especialista em Web Performance & GenAI',
  ogDescription: 'Desenvolvedor Full Stack especializado em arquitetura de sistemas escaláveis, GenAI e soluções web de alta performance.',
  ogImage: `${SITE_URL}/imagens/portfolio/portfolio-tb-2026-tiago-bernardes-genai-dev.webp`,
  ogUrl: SITE_URL,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tiago Bernardes | Especialista em Web Performance & GenAI',
  twitterDescription: 'Desenvolvedor Full Stack especializado em arquitetura de sistemas escaláveis, GenAI e soluções web de alta performance.',
  twitterImage: `${SITE_URL}/imagens/portfolio/portfolio-tb-2026-tiago-bernardes-genai-dev.webp`,
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tiago Bernardes',
      jobTitle: 'Desenvolvedor Full Stack & Especialista em GenAI',
      description: 'Desenvolvedor Full Stack e Especialista em Inteligência Artificial. Arquitetura de sistemas escaláveis e soluções de GenAI para alta performance digital.',
      url: SITE_URL,
      sameAs: [
        'https://www.linkedin.com/in/tiagobernard/',
        'https://github.com/tiagobernard',
      ],
    }),
  }],
})
</script>