<template>
  <div v-if="post">
    <!-- Page Hero -->
    <section class="post-hero relative overflow-hidden py-28 md:py-26">
      <div class="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <span class="orb orb-1 absolute rounded-full pointer-events-none" aria-hidden="true" />
      <span class="orb orb-2 absolute rounded-full pointer-events-none" aria-hidden="true" />

      <UContainer class="relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <p class="label-tag mb-5 inline-flex items-center gap-2 justify-center" style="color: var(--color-tertiary);">
            <UIcon name="i-heroicons-tag" class="text-base" />
            <span v-if="post.tags && post.tags.length > 0">{{ post.tags.join(', ') }}</span>
          </p>

          <h1 class="post-title font-black leading-tight mb-6" style="color: var(--color-on-surface);">
            {{ post.titulo }}
          </h1>

          <p class="text-sm tracking-widest uppercase" style="color: var(--color-outline);">
            {{ post.date }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Post Content -->
    <section class="py-16 md:py-24" style="background-color: var(--color-surface);">
      <UContainer>
        <div class="max-w-3xl mx-auto">
          <!-- Featured Image -->
          <img v-if="post.imagem" :src="post.imagem" :alt="post.titulo" class="w-full rounded-2xl mb-12 shadow-xl" />

          <!-- HTML output area -->
          <div 
            class="artigo-container prose prose-invert prose-lg md:prose-xl font-sans max-w-none" 
            style="--tw-prose-body: var(--color-on-surface-variant); --tw-prose-headings: var(--color-on-surface); --tw-prose-links: var(--color-primary);"
            v-html="post.artigo"
          />
        </div>
      </UContainer>
    </section>
  </div>
  
  <div v-else-if="pending" class="min-h-screen flex items-center justify-center" style="background-color: var(--color-surface);">
    <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin" style="color: var(--color-primary);" />
  </div>

  <div v-else class="min-h-screen flex items-center justify-center flex-col gap-4" style="background-color: var(--color-surface);">
    <UIcon name="i-heroicons-exclamation-triangle" class="w-16 h-16" style="color: var(--color-error);" />
    <h2 class="text-2xl font-bold" style="color: var(--color-on-surface);">Post não encontrado!</h2>
    <UButton as="a" href="/posts" variant="ghost">Voltar para artigos</UButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const slug = route.params.slug as string

interface BlogPost {
  imagem: string
  titulo: string
  slug: string
  tags: string[]
  date: string
  resumo: string
  artigo: string
}

const { data: post, pending } = useAsyncData(`post-${slug}`, async () => {
  const res = await axios.get<BlogPost[]>('/data/posts.json')
  return res.data.find(p => p.slug === slug)
}, { server: false })

useSeoMeta({
  title: () => post.value ? `${post.value.titulo} – Blog` : 'Carregando Artigo...',
  description: () => post.value ? post.value.resumo : 'Confira mais um artigo no blog de Tiago Bernardes.',
  ogTitle: () => post.value ? post.value.titulo : 'Artigo do Blog',
  ogDescription: () => post.value ? post.value.resumo : '',
  ogImage: () => post.value ? post.value.imagem : '',
  twitterCard: 'summary_large_image',
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
.post-hero {
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

.post-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
}

/* Tipografia e Estilização Avançada do HTML do Post */
.artigo-container :deep(p) {
  margin-bottom: 1.75rem;
  line-height: 1.85;
  color: var(--color-on-surface-variant);
}

.artigo-container :deep(h2) {
  color: var(--color-on-surface);
  font-size: 2.25rem;
  font-weight: 800;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.artigo-container :deep(h3) {
  color: var(--color-on-surface);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.artigo-container :deep(strong),
.artigo-container :deep(b) {
  color: var(--color-on-surface);
  font-weight: 700;
}

.artigo-container :deep(a) {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dashed var(--color-primary);
  transition: all 0.2s ease-in-out;
  padding-bottom: 2px;
}

.artigo-container :deep(a:hover) {
  color: var(--color-tertiary);
  border-bottom-color: var(--color-tertiary);
  border-bottom-style: solid;
}

.artigo-container :deep(pre) {
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--color-outline-variant, rgba(255, 255, 255, 0.08));
  border-radius: 0.75rem;
  padding: 1.5rem;
  overflow-x: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.artigo-container :deep(pre code) {
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #e2e8f0;
  background: transparent;
  padding: 0;
  border: none;
}

.artigo-container :deep(:not(pre) > code) {
  background-color: var(--color-outline-variant, rgba(255, 255, 255, 0.1));
  color: var(--color-primary);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
  font-family: 'Fira Code', monospace;
}

.artigo-container :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.artigo-container :deep(ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.artigo-container :deep(li) {
  margin-bottom: 0.5rem;
  color: var(--color-on-surface-variant);
}
</style>
