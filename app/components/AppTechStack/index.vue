<template>
  <section id="habilidades" class="py-24" style="background-color: var(--color-surface-low);">
    <UContainer>
      <!-- Section header -->
      <div class="reveal mb-14">
        <p class="label-tag mb-3" style="color: var(--color-tertiary);">Stack Tecnológico</p>
        <h2 class="headline-lg" style="color: var(--color-on-surface);">Tecnologias & Arquitetura</h2>
        <p class="mt-3 max-w-xl text-base leading-relaxed" style="color: var(--color-on-surface-variant);">
          Uma seleção criteriosa de tecnologias que utilizo para construir aplicações web escaláveis, resilientes e de
          alta performance.
        </p>
      </div>

      <!-- Bento Grid -->
      <ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <li v-for="(tech, i) in techs" :key="tech.name"
          class="tech-card reveal group relative flex rounded-2xl cursor-default overflow-hidden glass-panel-subtle"
          :class="[tech.core ? 'col-span-2' : 'col-span-1']" :style="{
            '--i': i,
            '--brand-color': tech.brandColor,
            'animation-delay': `calc(0.04s * ${i})`,
            'background-color': 'var(--color-surface-high)',
            'border': '1px solid color-mix(in srgb, var(--color-on-surface-variant) 10%, transparent)'
          }">

          <!-- CORE Badge -->
          <span v-if="tech.core"
            class="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest font-bold border transition-colors duration-300 z-10"
            style="background-color: color-mix(in srgb, var(--color-on-surface-variant) 10%, transparent); color: var(--color-on-surface-variant); border-color: color-mix(in srgb, var(--color-on-surface-variant) 15%, transparent);">
            CORE
          </span>

          <div class="w-full h-full p-5 lg:p-6 flex relative z-10"
            :class="tech.core ? 'flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5' : 'flex-col items-center justify-center gap-4 text-center'">

            <!-- Icon Box & Localized Glow -->
            <div class="relative flex items-center justify-center shrink-0">
              <div
                class="tech-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-0 pointer-events-none transition-opacity duration-300"
                style="background: radial-gradient(circle, color-mix(in srgb, var(--brand-color) 20%, transparent) 0%, transparent 60%);">
              </div>

              <div
                class="tech-icon rounded-xl flex items-center justify-center transition-colors duration-300 relative z-10"
                :class="tech.core ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-12 h-12'"
                style="background-color: color-mix(in srgb, var(--color-on-surface-variant) 5%, transparent); color: var(--color-on-surface-variant);">
                <UIcon :name="tech.icon" :class="tech.core ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-6 h-6'" />
              </div>
            </div>

            <!-- Text Content -->
            <div class="flex flex-col" :class="tech.core ? 'items-start text-left' : 'items-center'">
              <p class="font-semibold transition-colors duration-300"
                :class="tech.core ? 'text-base sm:text-lg' : 'text-sm'"
                style="font-family: 'JetBrains Mono', monospace; color: var(--color-on-surface);">
                {{ tech.name }}
              </p>
              <p class="label-tag mt-1 opacity-60 transition-opacity duration-300"
                style="font-family: 'Inter', sans-serif; color: var(--color-on-surface-variant);">
                {{ tech.desc }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Tech {
  name: string
  icon: string
  desc: string
  brandColor: string
  core?: boolean
}

const techs: Tech[] = [
  // Linha 1
  { name: 'Nuxt 4', icon: 'i-simple-icons-nuxtdotjs', desc: 'SSR & Arquitetura Escalável', brandColor: '#00DC82', core: true },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', desc: 'Progressive Framework', brandColor: '#4FC08D' },
  { name: 'Pinia', icon: 'i-simple-icons-pinia', desc: 'State Management', brandColor: '#FFD859' },

  // Linha 2
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', desc: 'Tipagem Estática & Segurança', brandColor: '#3178C6' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', desc: 'Runtime Javascript', brandColor: '#5FA04E' },
  { name: 'n8n', icon: 'i-simple-icons-n8n', desc: 'Automação de Workflows Avançada', brandColor: '#EA4B71', core: true },

  // Linha 3
  { name: 'OpenProject', icon: 'i-simple-icons-openproject', desc: 'Engenharia de Gestão', brandColor: '#0B599E', core: true },
  { name: 'Python', icon: 'i-simple-icons-python', desc: 'Backend & Data', brandColor: '#3776AB' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql', desc: 'Persistência Relacional', brandColor: '#336791' },

  // Linha 4
  { name: 'Docker', icon: 'i-simple-icons-docker', desc: 'Containerização', brandColor: '#2496ED' },
  { name: 'OpenAI', icon: 'i-simple-icons-openai', desc: 'Integração de LLMs', brandColor: '#10A37F' },
  { name: 'Anthropic', icon: 'i-simple-icons-anthropic', desc: 'Claude & IA Avançada', brandColor: '#D97757', core: true },

  // Linha 5
  { name: 'Git', icon: 'i-simple-icons-git', desc: 'CI/CD & Controle de Versão', brandColor: '#F05032', core: true },
  { name: 'Cypress', icon: 'i-simple-icons-cypress', desc: 'E2E Testing', brandColor: '#69D3A7' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', desc: 'Estilização Utilitária', brandColor: '#06B6D4' }
]

useScrollReveal()
</script>

<style scoped>
.tech-card {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
}

@media (hover: hover) and (pointer: fine) {
  .tech-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--brand-color) 30%, transparent) !important;
  }

  .tech-card:hover .tech-glow {
    opacity: 1;
  }

  .tech-card:hover .tech-icon {
    color: var(--brand-color) !important;
    background-color: color-mix(in srgb, var(--brand-color) 10%, transparent) !important;
  }

  .tech-card:hover span.uppercase {
    color: var(--brand-color) !important;
    border-color: color-mix(in srgb, var(--brand-color) 30%, transparent) !important;
    background-color: color-mix(in srgb, var(--brand-color) 10%, transparent) !important;
  }
}
</style>
