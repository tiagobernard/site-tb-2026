<template>
  <section id="blog" class="py-24" style="background-color: var(--color-surface);">
    <UContainer>
      <!-- Header -->
      <div class="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="label-tag mb-3" style="color: var(--color-tertiary);">Conhecimento Compartilhado</p>
          <h2 class="headline-lg" style="color: var(--color-on-surface);">Insights &amp; Tutorials</h2>
        </div>
        <UButton
          as="a"
          href="/blog"
          variant="ghost"
          trailing-icon="i-heroicons-chevron-right"
          class="shrink-0 font-semibold"
          style="color: var(--color-primary);"
        >View All Articles</UButton>
      </div>

      <!-- Blog cards grid -->
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li
          v-for="(post, i) in posts"
          :key="post.title"
          class="reveal glass-panel rounded-2xl overflow-hidden flex flex-col
                 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <!-- Color bar accent -->
          <div class="h-1 gradient-primary shrink-0" />

          <div class="p-6 flex flex-col gap-4 flex-1">
            <!-- Meta -->
            <div class="flex items-center gap-3">
              <span
                class="label-tag px-2.5 py-1 rounded-full"
                style="background-color: var(--color-secondary-container); color: var(--color-secondary);"
              >{{ post.category }}</span>
              <span class="label-tag" style="color: var(--color-outline);">{{ post.date }}</span>
            </div>

            <h3
              class="text-base font-semibold leading-snug group-hover:opacity-80 transition-opacity"
              style="color: var(--color-on-surface);"
            >{{ post.title }}</h3>
            <p class="text-sm leading-relaxed flex-1" style="color: var(--color-on-surface-variant);">{{ post.excerpt }}</p>

            <span
              class="mt-auto flex items-center gap-1.5 text-sm font-semibold"
              style="color: var(--color-primary);"
            >
              Ler artigo
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
}

const posts: BlogPost[] = [
  {
    title: 'Construindo SPAs performáticas com Vue 3 e Vite',
    excerpt: 'Como estruturar um projeto Vue 3 do zero priorizando performance e developer experience.',
    category: 'Vue.js',
    date: 'Mar 2026',
  },
  {
    title: 'Tailwind CSS v4: O que mudou e como migrar',
    excerpt: 'Análise completa das mudanças na nova versão do Tailwind com o novo sistema de tokens CSS-first.',
    category: 'CSS',
    date: 'Fev 2026',
  },
  {
    title: 'FastAPI + Redis: APIs de baixa latência em produção',
    excerpt: 'Padrões para criar microsserviços escaláveis com Python, FastAPI e cache Redis.',
    category: 'Backend',
    date: 'Jan 2026',
  },
]

useScrollReveal()
</script>
