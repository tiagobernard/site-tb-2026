<template>
  <div>
    <!-- Page Hero -->
    <section class="blog-hero relative overflow-hidden py-28 md:py-26">
      <!-- Decorative background grid -->
      <div class="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <!-- Floating accent orbs -->
      <span class="orb orb-1 absolute rounded-full pointer-events-none" aria-hidden="true" />
      <span class="orb orb-2 absolute rounded-full pointer-events-none" aria-hidden="true" />

      <UContainer class="relative z-10">
        <div class="max-w-3xl">
          <!-- Eyebrow label -->
          <p class="label-tag mb-5 inline-flex items-center gap-2" style="color: var(--color-tertiary);">
            <UIcon name="i-heroicons-document-text" class="text-base" />
            Conhecimento Compartilhado
          </p>

          <!-- Main title — typographic statement -->
          <h1 class="blog-title font-black leading-none tracking-tight mb-6" style="color: var(--color-on-surface);">
            Artigos e<br />
            <em class="not-italic" style="color: var(--color-primary);">Insights</em>
          </h1>

          <p class="text-lg md:text-xl leading-relaxed max-w-xl" style="color: var(--color-on-surface-variant);">
            Tutoriais, dicas de performance, novidades do ecossistema front-end e reflexões sobre design de UI/UX e desenvolvimento de software.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Blog list (paginated setup) -->
    <AppBlog :hideHeader="true" :limit="10" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog – Tiago Bernardes | Artigos de Front-end',
  description: 'Leia artigos completos sobre Vue.js, React, CSS, performance web, e design UI/UX da perspectiva de um programador front-end especialista.',
  ogTitle: 'Blog de Tiago Bernardes – Insights & Tutoriais',
  ogDescription: 'Descubra tutoriais avançados, dicas e análises sobre desenvolvimento web moderno.',
  ogImage: '/data/tiago-bernardes-blog-banner.png',
  twitterCard: 'summary_large_image',
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
.blog-hero {
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

.blog-title {
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
}
</style>
