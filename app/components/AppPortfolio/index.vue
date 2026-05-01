<template>
  <section id="portfolio" class="py-24" style="background-color: var(--color-surface-low);">
    <UContainer>

      <!-- Section header — home page only -->
      <div v-if="preview" class="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="label-tag mb-3" style="color: var(--color-tertiary);">Trabalhos em Destaque</p>
          <h2 class="headline-lg" style="color: var(--color-on-surface);">Portfólio Selecionado</h2>
        </div>
        <UButton as="a" href="/portfolio" variant="ghost" trailing-icon="i-heroicons-arrow-right"
          class="shrink-0 font-semibold" style="color: var(--color-primary);">Ver todos os projetos</UButton>
      </div>

      <!-- Loading state -->
      <div v-if="pending" class="flex justify-center py-20">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-3xl" style="color: var(--color-primary);" />
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-20">
        <p style="color: var(--color-error);">Erro ao carregar o portfólio. Tente novamente.</p>
      </div>

      <!-- Project list -->
      <ul v-else class="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[240px]">
        <li v-for="(project, i) in paginatedItems" :key="project.id + '-' + currentPage" class="reveal group relative bento-card-fix rounded-3xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-end" :class="getBentoClasses(i)" :style="{
          backgroundImage: `url(${project.imagem})`,
          animationDelay: `${i * 0.08}s`
        }">

          <!-- Desktop CTA Icon -->
          <UButton v-if="project.url_externa && project.url_externa.trim() !== ''" as="a"
            :href="project.url_externa.trim()" target="_blank" rel="noopener noreferrer" variant="ghost"
            icon="i-heroicons-arrow-top-right-on-square"
            class="hidden md:flex absolute top-6 right-6 z-20 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-md border border-white/20"
            aria-label="Acessar" />

          <!-- Overlays -->
          <div class="absolute inset-0 z-0">
            <!-- Gradient Overlay Base -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[color:var(--color-surface)]/95 via-[color:var(--color-surface)]/40 to-transparent">
            </div>
            <!-- Overlay Escuro no Hover -->
            <div
              class="absolute inset-0 bg-[color:var(--color-surface)]/0 group-hover:bg-[color:var(--color-surface)]/85 backdrop-blur-none group-hover:backdrop-blur-[3px] transition-all duration-500">
            </div>
          </div>

          <!-- Project content -->
          <div class="relative z-10 flex flex-col flex-1 p-5 md:p-6 md:h-full md:justify-end">
            <div class="flex flex-col gap-3">
              <!-- Title -->
              <h3
                class="text-2xl md:text-3xl font-bold capitalize text-[color:var(--color-on-surface)] md:text-white drop-shadow-sm transition-transform duration-500 md:group-hover:-translate-y-1">
                {{ project.titulo }}
              </h3>

              <!-- Hover Reveal Block (Fade in + Slide up grid trick on Desktop) -->
              <div
                class="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div class="overflow-hidden">
                  <!-- Inner wrapper for fade-in -->
                  <div
                    class="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col gap-3 md:pb-2">
                    <div
                      class="text-sm leading-relaxed text-[color:var(--color-on-surface-variant)] md:text-gray-200 line-clamp-2"
                      v-html="project.descricao" />

                    <!-- Tech chips & Mobile CTA -->
                    <div
                      class="pt-2 md:pt-3 mt-1 flex flex-wrap items-center justify-between gap-4 md:border-t md:border-white/20">
                      <!-- Badges Minimalistas -->
                      <ul class="flex flex-wrap gap-2">
                        <li v-for="tag in project.tags" :key="tag"
                          class="px-2.5 py-0.5 text-[11px] font-medium rounded-md uppercase tracking-wider md:bg-transparent md:text-white md:border md:border-white/30 bg-[color:var(--color-secondary-container)] text-[color:var(--color-secondary)] border border-transparent">
                          {{ tag }}
                        </li>
                      </ul>

                      <!-- Mobile CTA (escondido no desktop já que usa ícone superior) -->
                      <UButton v-if="project.url_externa && project.url_externa.trim() !== ''" as="a"
                        :href="project.url_externa.trim()" target="_blank" rel="noopener noreferrer" variant="soft"
                        trailing-icon="i-heroicons-arrow-top-right-on-square"
                        class="md:hidden shrink-0 font-medium rounded-full px-4" style="color: var(--color-primary);">
                        Acessar</UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- Pagination — full mode only -->
      <div v-if="!preview && totalPages > 1" class="mt-12 flex items-center justify-center gap-3">
        <UButton variant="ghost" icon="i-heroicons-chevron-left" :disabled="currentPage === 1"
          style="color: var(--color-primary);" @click="goToPage(currentPage - 1)" />

        <button v-for="page in totalPages" :key="page"
          class="w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer" :style="page === currentPage
            ? 'background-color: var(--color-primary); color: var(--color-on-primary);'
            : 'color: var(--color-on-surface-variant);'" @click="goToPage(page)">{{ page }}</button>

        <UButton variant="ghost" icon="i-heroicons-chevron-right" :disabled="currentPage === totalPages"
          style="color: var(--color-primary);" @click="goToPage(currentPage + 1)" />
      </div>

    </UContainer>
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, computed, onMounted, nextTick, watch, onUnmounted } from 'vue'

interface PortfolioItem {
  id: number
  titulo: string
  descricao: string
  imagem: string
  url_externa: string
  tags: string[]
}

const props = defineProps<{
  preview?: boolean
}>()

const pageSize = 10
const currentPage = ref(1)

const data = ref<PortfolioItem[]>([])
const pending = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('/data/portfolio.json')
    data.value = response.data
  } catch (e: any) {
    error.value = e
  } finally {
    pending.value = false
  }
  await nextTick()
  initReveal()
})

const allItems = computed(() => data.value ?? [])

const displayedItems = computed(() =>
  props.preview ? allItems.value.slice(0, 6) : allItems.value
)

const totalPages = computed(() =>
  Math.ceil(displayedItems.value.length / pageSize)
)

const paginatedItems = computed(() => {
  if (props.preview) return displayedItems.value
  const start = (currentPage.value - 1) * pageSize
  return displayedItems.value.slice(start, start + pageSize)
})

const bentoClasses = [
  'md:col-span-8 md:row-span-2', // i=0: Destaque
  'md:col-span-4 md:row-span-1', // i=1: Secundário
  'md:col-span-4 md:row-span-1', // i=2: Secundário
  'md:col-span-4 md:row-span-1', // i=3
  'md:col-span-4 md:row-span-1', // i=4
  'md:col-span-4 md:row-span-1', // i=5
  'md:col-span-6 md:row-span-1', // i=6
  'md:col-span-6 md:row-span-1', // i=7
  'md:col-span-6 md:row-span-1', // i=8
  'md:col-span-6 md:row-span-1', // i=9
]

function getBentoClasses(i: number) {
  return bentoClasses[i % bentoClasses.length]
}

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  
  // Reseta as classes is-visible para que a animação ocorra na nova página
  nextTick(() => {
    const visibleElements = document.querySelectorAll('#portfolio .reveal.is-visible')
    visibleElements.forEach(el => el.classList.remove('is-visible'))
    
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    initReveal()
  })
}

// Lógica de Scroll Reveal personalizada para elementos paginados
let observer: IntersectionObserver | null = null

const initReveal = () => {
  const elements = document.querySelectorAll('#portfolio .reveal:not(.is-visible)')
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

watch(paginatedItems, async () => {
  await nextTick()
  initReveal()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* A classe .reveal global (main.css) é utilizada para a animação */
.bento-card-fix {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: inset(0 round 24px);
  /* Substituindo borda real por shadow interno para evitar artefatos e frestas */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transform: translateZ(0);
  will-change: transform;
  min-height: 280px; /* Altura para mobile */
}

@media (min-width: 768px) {
  .bento-card-fix {
    min-height: 0; /* No desktop o grid controla a altura */
    height: 100%;
  }
}

.bento-card-fix:hover {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 30px 0 rgba(255, 255, 255, 0.15);
}
</style>
