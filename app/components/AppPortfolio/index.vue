<template>
  <section id="portfolio" class="py-24" style="background-color: var(--color-surface-low);">
    <UContainer>

      <!-- Section header — home page only -->
      <div v-if="preview" class="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="label-tag mb-3" style="color: var(--color-tertiary);">Trabalhos Selecionados</p>
          <h2 class="headline-lg" style="color: var(--color-on-surface);">Selected Portfolio</h2>
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
      <ul v-else class="flex flex-col gap-6">
        <li v-for="(project, i) in paginatedItems" :key="project.id + '-' + currentPage" class="fade-in group glass-panel rounded-2xl overflow-hidden
                 grid grid-cols-1 md:grid-cols-[280px_1fr] items-stretch
                 transition-all duration-300 hover:-translate-y-0.5" :style="{ animationDelay: `${i * 0.08}s` }">
          <!-- Project image tracking div height -->
          <div class="relative h-56 md:h-full w-full overflow-hidden"
            style="background-color: var(--color-surface);">
            <img :src="project.imagem" :alt="project.titulo"
              class="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy" />
          </div>

          <!-- Project content -->
          <div class="flex flex-col flex-1 gap-4 p-6 md:p-8 h-full">

            <h3 class="text-xl font-bold capitalize" style="color: var(--color-on-surface);">{{ project.titulo }}</h3>

            <div class="text-sm leading-relaxed" style="color: var(--color-on-surface-variant);"
              v-html="project.descricao" />

            <!-- Bottom area: Tech chips & CTA -->
            <div class="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
              <!-- Tech chips -->
              <ul class="flex flex-wrap gap-2">
                <li v-for="tag in project.tags" :key="tag" class="label-tag px-3 py-1 rounded-full"
                  style="background-color: var(--color-secondary-container); color: var(--color-secondary);">{{ tag }}
                </li>
              </ul>

              <!-- CTA — only when url_externa exists -->
              <UButton v-if="project.url_externa && project.url_externa.trim() !== ''" as="a"
                :href="project.url_externa.trim()" target="_blank" rel="noopener noreferrer" variant="soft"
                trailing-icon="i-heroicons-arrow-top-right-on-square"
                class="shrink-0 font-medium rounded-full px-4 transition-transform hover:-translate-y-0.5"
                style="color: var(--color-primary);">Acessar</UButton>
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
import { ref, computed, onMounted, nextTick } from 'vue'

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
})

const allItems = computed(() => data.value ?? [])

const displayedItems = computed(() =>
  props.preview ? allItems.value.slice(0, 4) : allItems.value
)

const totalPages = computed(() =>
  Math.ceil(displayedItems.value.length / pageSize)
)

const paginatedItems = computed(() => {
  if (props.preview) return displayedItems.value
  const start = (currentPage.value - 1) * pageSize
  return displayedItems.value.slice(start, start + pageSize)
})

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  nextTick(() => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<style scoped>
/* Keyframe para fade in reativo quando navegar pela paginação */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
