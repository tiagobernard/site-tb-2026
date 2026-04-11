<template>
  <div>
    <!-- Page Hero -->
    <section class="portifolio-hero relative overflow-hidden py-28 md:py-26">
      <!-- Decorative background grid -->
      <div class="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <!-- Floating accent orbs -->
      <span class="orb orb-1 absolute rounded-full pointer-events-none" aria-hidden="true" />
      <span class="orb orb-2 absolute rounded-full pointer-events-none" aria-hidden="true" />

      <UContainer class="relative z-10">
        <div class="max-w-3xl">
          <!-- Eyebrow label -->
          <p class="label-tag mb-5 inline-flex items-center gap-2" style="color: var(--color-tertiary);">
            <UIcon name="i-heroicons-rectangle-stack" class="text-base" />
            Portfólio Completo
          </p>

          <!-- Main title — typographic statement -->
          <h1 class="portifolio-title font-black leading-none tracking-tight mb-6"
            style="color: var(--color-on-surface);">
            Anos de<br />
            <em class="not-italic" style="color: var(--color-primary);">Projetos</em><br />
            Reais
          </h1>

          <p class="text-lg md:text-xl leading-relaxed max-w-xl" style="color: var(--color-on-surface-variant);">
            Mais de duas décadas construindo soluções digitais — de e-commerces e sites institucionais
            a plataformas educacionais e sistemas web sob medida.
          </p>

          <!-- Stats bar -->
          <div class="mt-10 flex flex-wrap gap-8">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
              <span class="text-3xl font-black" style="color: var(--color-primary);">{{ stat.value }}</span>
              <span class="text-xs uppercase tracking-widest" style="color: var(--color-outline);">{{ stat.label
                }}</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Portfolio list with pagination -->
    <AppPortfolio />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfólio – Tiago Bernardes | Projetos Web Reais',
  description: 'Conheça os projetos desenvolvidos por Tiago Bernardes ao longo de mais de 10 anos: e-commerces, sites institucionais, lojas virtuais e sistemas web com WordPress, Vue.js e muito mais.',
  ogTitle: 'Portfólio Completo – Tiago Bernardes',
  ogDescription: 'Mais de 40 projetos entregues. Do e-commerce ao sistema web sob medida — veja o histórico real de entregas em WordPress, WooCommerce, Vue.js e outras tecnologias.',
  ogImage: '/imagens/portfolio/lab82-site-wordpress-quadrilha-djonga.png',
  twitterCard: 'summary_large_image',
})

definePageMeta({
  layout: 'default',
})

const stats = [
  { value: '40+', label: 'Projetos em destaque' },
  { value: '20+', label: 'Anos de experiência' },
  { value: '15+', label: 'Tecnologias' },
]
</script>

<style scoped>
.portifolio-hero {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-outline-variant, rgba(255, 255, 255, 0.08));
}

.hero-grid {
  background-image:
    linear-gradient(var(--color-outline-variant, rgba(255, 255, 255, 0.04)) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-outline-variant, rgba(255, 255, 255, 0.04)) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 20% 40%, black 30%, transparent 100%);
}

.orb {
  filter: blur(80px);
  opacity: 0.18;
}

.orb-1 {
  width: 420px;
  height: 420px;
  top: -100px;
  right: -80px;
  background-color: var(--color-primary);
}

.orb-2 {
  width: 260px;
  height: 260px;
  bottom: -60px;
  left: 40%;
  background-color: var(--color-tertiary);
}

.portifolio-title {
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
}
</style>
