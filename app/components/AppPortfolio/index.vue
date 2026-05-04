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
          class="shrink-0 font-mono font-medium tracking-wide" style="color: var(--color-primary);">Ver todos os
          projetos</UButton>
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
      <ul v-else class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:auto-rows-[240px]">
        <li v-for="(project, i) in paginatedItems" :key="project.id + '-' + currentPage"
          class="reveal group relative bento-card-fix transition-all duration-500 hover:-translate-y-1 flex flex-col bg-[color:var(--color-surface)]"
          :class="[getBentoClasses(i), i === 5 && preview ? 'md:hidden lg:flex' : '']" :style="{
            animationDelay: `${i * 0.08}s`
          }">

          <!-- Image Layer: Stack on xs, sm, md | Absolute on Desktop (lg+) -->
          <div
            class="relative lg:absolute lg:inset-0 w-full h-56 sm:h-72 md:h-80 lg:h-full shrink-0 z-0">
            <NuxtImg v-if="project.imagem" :src="project.imagem" alt="" loading="lazy"
              :sizes="i === 0 ? 'xs:100vw sm:100vw md:100vw lg:900px' : 'xs:100vw sm:50vw md:50vw lg:400px'"
              format="webp"
              class="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105" />

            <!-- Desktop Overlays (lg+) -->
            <div class="hidden lg:block absolute inset-0 z-10">
              <!-- Gradient Overlay Base -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--color-surface)_95%,transparent)] via-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] lg:via-[color-mix(in_srgb,var(--color-surface)_40%,transparent)] to-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] lg:to-transparent">
              </div>
              <!-- Hover Dark Overlay -->
              <div
                class="absolute inset-0 bg-transparent lg:group-hover:bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] backdrop-blur-none lg:group-hover:backdrop-blur-[3px] transition-all duration-500">
              </div>
            </div>
          </div>

          <!-- Desktop CTA Icon (Keep Absolute) -->
          <UButton v-if="project.url_externa && project.url_externa.trim() !== ''" as="a"
            :href="project.url_externa.trim()" target="_blank" rel="noopener noreferrer" variant="ghost"
            icon="i-heroicons-arrow-top-right-on-square"
            class="touch-visible-icon hidden lg:flex absolute top-6 right-6 z-30 opacity-0 -translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-md border border-white/20"
            aria-label="Acessar" />

          <!-- Project Content Box: Solid background on xs, sm, md | Transparent on Desktop (lg+) -->
          <div
            class="relative z-20 flex flex-col flex-1 p-6 md:p-10 lg:p-6 lg:h-full lg:justify-end bg-[color:var(--color-surface)] lg:bg-transparent">
            <div class="flex flex-col gap-3">
              <!-- Title -->
              <h3
                class="text-xl md:text-2xl lg:text-3xl font-bold capitalize text-[color:var(--color-on-surface)] lg:text-white drop-shadow-sm transition-transform duration-500 lg:group-hover:-translate-y-1">
                {{ project.titulo }}
              </h3>

              <!-- Content Block: Always visible on Mobile, Reveal on Hover on Desktop -->
              <div
                class="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div class="overflow-hidden">
                  <!-- Inner wrapper -->
                  <div
                    class="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 lg:delay-100 flex flex-col gap-3 lg:pb-2">
                    <div
                      class="text-sm leading-relaxed text-[color:var(--color-on-surface-variant)] lg:text-gray-200 lg:line-clamp-2"
                      v-html="project.descricao" />

                    <!-- Tech chips & Mobile CTA -->
                    <div
                      class="pt-5 mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-on-surface)]/10 lg:border-white/20">
                      <!-- Tags -->
                      <ul class="flex flex-wrap gap-2">
                        <li v-for="tag in project.tags" :key="tag"
                          class="px-2 py-0.5 text-[10px] font-mono font-medium rounded uppercase tracking-wider bg-[color:var(--color-surface-high)] text-[color:var(--color-on-surface-variant)] lg:bg-transparent lg:text-white lg:border lg:border-white/30 border border-white/10">
                          {{ tag }}
                        </li>
                      </ul>

                      <!-- Mobile/Touch Button -->
                      <UButton v-if="project.url_externa && project.url_externa.trim() !== ''" as="a"
                        :href="project.url_externa.trim()" target="_blank" rel="noopener noreferrer"
                        variant="soft" size="sm" trailing-icon="i-heroicons-arrow-top-right-on-square"
                        class="touch-visible-btn lg:hidden shrink-0 font-mono font-medium rounded-full px-6"
                        style="color: var(--color-primary);">
                        Acessar
                      </UButton>
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

const isTablet = ref(false)
let handleResize: () => void

const pageSize = computed(() => isTablet.value ? 11 : 10)
const currentPage = ref(1)

const { data, pending, error } = useAsyncData('portfolio-data', async () => {
  try {
    return await $fetch<PortfolioItem[]>('/data/portfolio.json')
  } catch (err) {
    console.error('Failed to fetch portfolio:', err)
    throw err
  }
}, {
  server: false,
  default: () => []
})

onMounted(async () => {
  handleResize = () => {
    isTablet.value = window.innerWidth >= 768 && window.innerWidth < 1024
  }
  handleResize()
  window.addEventListener('resize', handleResize)

  await nextTick()
  initReveal()
})

const allItems = computed(() => data.value ?? [])

const displayedItems = computed(() =>
  props.preview ? allItems.value.slice(0, 6) : allItems.value
)

const totalPages = computed(() =>
  Math.ceil(displayedItems.value.length / pageSize.value)
)

const paginatedItems = computed(() => {
  if (props.preview) return displayedItems.value
  const start = (currentPage.value - 1) * pageSize.value
  return displayedItems.value.slice(start, start + pageSize.value)
})

const bentoClasses = [
  'md:col-span-8 lg:col-span-8 lg:row-span-2', // i=0: Destaque
  'md:col-span-4 lg:col-span-4 lg:row-span-1', // i=1: Secundário
  'md:col-span-4 lg:col-span-4 lg:row-span-1', // i=2: Secundário
  'md:col-span-4 lg:col-span-4 lg:row-span-1', // i=3
  'md:col-span-4 lg:col-span-4 lg:row-span-1', // i=4
  'md:col-span-4 lg:col-span-4 lg:row-span-1', // i=5
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=6
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=7
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=8
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=9
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=10 (Tablet Extra)
  'md:col-span-4 lg:col-span-6 md:row-span-1', // i=11 (Safety)
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
  if (handleResize) window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* A classe .reveal global (main.css) é utilizada para a animação */
.bento-card-fix {
  clip-path: inset(0 round 24px);
  /* Substituindo borda real por shadow interno para evitar artefatos e frestas */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transform: translateZ(0);
  will-change: transform;
  min-height: 280px;
  /* Altura para mobile */
}

@media (min-width: 768px) {
  .bento-card-fix {
    min-height: 0;
    /* No desktop o grid controla a altura */
    height: 100%;
  }
}

.bento-card-fix:hover {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 30px 0 rgba(255, 255, 255, 0.15);
}

/* 
  ELITE TOUCH FIX: iPad Pro & Large Touch Devices 
  Garante que o conteúdo seja legível e visível em dispositivos que não suportam hover,
  mesmo que a tela seja grande o suficiente para disparar o layout Bento (lg).
*/
@media (hover: none) {
  /* Força a expansão do grid de conteúdo */
  :deep(.lg\:grid-rows-\[0fr\]) {
    grid-template-rows: 1fr !important;
  }

  /* Força a opacidade do conteúdo interno */
  :deep(.lg\:opacity-0) {
    opacity: 1 !important;
  }

  /* Garante que o overlay seja escuro o suficiente para legibilidade do texto branco no Bento mode */
  :deep(.lg\:via-\[color-mix\(in_srgb\,var\(--color-surface\)_40\%\,transparent\)\]) {
    background-image: linear-gradient(to top, 
      color-mix(in srgb, var(--color-surface) 95%, transparent), 
      color-mix(in srgb, var(--color-surface) 85%, transparent) 60%, 
      color-mix(in srgb, var(--color-surface) 50%, transparent)
    ) !important;
  }

  /* Mostra o botão de acesso (que normalmente estaria oculto em lg) */
  .touch-visible-btn {
    display: flex !important;
  }

  /* Mostra o ícone flutuante superior (Bento Style) também no Touch */
  :deep(.touch-visible-icon) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
</style>