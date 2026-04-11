<template>
  <section id="blog" class="py-24" style="background-color: var(--color-surface);">
    <UContainer>
      <!-- Header -->
      <div v-if="!hideHeader" class="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="label-tag mb-3" style="color: var(--color-tertiary);">Conhecimento Compartilhado</p>
          <h2 class="headline-lg" style="color: var(--color-on-surface);">Insights &amp; Tutorials</h2>
        </div>
        <UButton as="a" href="/posts" variant="ghost" trailing-icon="i-heroicons-chevron-right"
          class="shrink-0 font-semibold" style="color: var(--color-primary);">Ver todos os Artigos</UButton>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin" style="color: var(--color-primary);" />
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12" style="color: var(--color-error);">
        Erro ao carregar os artigos do blog.
      </div>

      <!-- Blog cards grid -->
      <ul v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li v-for="(post, i) in posts" :key="post.slug" class="reveal glass-panel rounded-2xl overflow-hidden flex flex-col
                 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          :style="{ animationDelay: `${i * 0.1}s` }">
          <!-- Cover Image -->
          <div class="relative w-full h-48 sm:h-56 bg-zinc-800 shrink-0 overflow-hidden">
            <img v-if="post.imagem" :src="post.imagem" :alt="post.titulo"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div v-else class="w-full h-full flex items-center justify-center opacity-50">
              <UIcon name="i-heroicons-photo" class="w-10 h-10" />
            </div>
            <!-- Color bar accent -->
            <div class="absolute bottom-0 left-0 right-0 h-1 gradient-primary" />
          </div>

          <div class="p-6 flex flex-col gap-4 flex-1">
            <!-- Meta -->
            <div class="flex items-center gap-2 flex-wrap">
              <template v-if="post.tags">
                <span v-for="(tag, tagIdx) in post.tags" :key="tagIdx"
                  class="label-tag px-2.5 py-1 rounded-full truncate max-w-[150px]"
                  style="background-color: var(--color-secondary-container); color: var(--color-secondary);">
                  {{ tag.trim() }}
                </span>
              </template>
              <span class="label-tag ml-1" style="color: var(--color-outline);">{{ post.date }}</span>
            </div>

            <h3 class="text-base font-semibold leading-snug group-hover:opacity-80 transition-opacity line-clamp-2"
              style="color: var(--color-on-surface);">
              <NuxtLink :to="`/blog/${post.slug}`" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ post.titulo }}
              </NuxtLink>
            </h3>

            <p class="text-sm leading-relaxed flex-1 line-clamp-3" style="color: var(--color-on-surface-variant);">
              {{ post.resumo }}
            </p>

            <span class="mt-auto pt-2 flex items-center gap-1.5 text-sm font-semibold"
              style="color: var(--color-primary);">
              Leia mais
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
import axios from 'axios'

interface BlogPost {
  imagem: string
  titulo: string
  slug: string
  tags: string[]
  date: string
  resumo: string
}

const props = defineProps({
  hideHeader: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
    default: 3
  }
})

const { data: posts, pending, error } = useAsyncData('latest-blog-posts-' + props.limit, async () => {
  try {
    const res = await axios.get<BlogPost[]>('/data/posts.json')
    // Retorna a quantidade baseada na prop (futura base de paginação)
    return res.data.slice(0, props.limit)
  } catch (err) {
    console.error('Failed to fetch blog posts:', err)
    throw err
  }
}, { server: false })

import { watch, nextTick, onMounted, onUnmounted } from 'vue'
let observer: IntersectionObserver | null = null

const initReveal = () => {
  const elements = document.querySelectorAll('#blog .reveal:not(.is-visible)')
  if (!elements.length) return

  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer!.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
  }

  elements.forEach((el) => observer!.observe(el))
}

onMounted(() => {
  initReveal()
})

watch(posts, async () => {
  await nextTick()
  initReveal()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
