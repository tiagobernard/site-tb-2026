<template>
  <section id="portfolio" class="py-24" style="background-color: var(--color-surface-low);">
    <UContainer>
      <!-- Section header — bleeding asymmetric -->
      <div class="reveal mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="label-tag mb-3" style="color: var(--color-tertiary);">Trabalhos Selecionados</p>
          <h2 class="headline-lg" style="color: var(--color-on-surface);">Selected Portfolio</h2>
        </div>
        <UButton
          as="a"
          href="/portfolio"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-right"
          class="shrink-0 font-semibold"
          style="color: var(--color-primary);"
        >Ver todos os projetos</UButton>
      </div>

      <!-- Featured projects — staggered list -->
      <ul class="flex flex-col gap-6">
        <li
          v-for="(project, i) in projects"
          :key="project.title"
          class="reveal group glass-panel rounded-2xl p-6 md:p-8
                 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start
                 transition-all duration-300 hover:-translate-y-0.5"
          :style="{ animationDelay: `${i * 0.12}s` }"
        >
          <div class="flex flex-col gap-4">
            <!-- Project number -->
            <span class="label-tag" style="color: var(--color-outline);">{{ String(i + 1).padStart(2, '0') }}</span>

            <h3 class="text-xl font-bold" style="color: var(--color-on-surface);">{{ project.title }}</h3>
            <p class="text-sm leading-relaxed max-w-xl" style="color: var(--color-on-surface-variant);">{{ project.desc }}</p>

            <!-- Tech chips -->
            <ul class="flex flex-wrap gap-2 mt-1">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="label-tag px-3 py-1 rounded-full"
                style="background-color: var(--color-secondary-container); color: var(--color-secondary);"
              >{{ tag }}</li>
            </ul>
          </div>

          <!-- CTA arrow -->
          <UButton
            variant="ghost"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
            class="shrink-0 mt-1 font-semibold opacity-60 group-hover:opacity-100 transition-opacity"
            style="color: var(--color-primary);"
          >
            View Case Study
          </UButton>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Project {
  title: string
  desc: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'E-Learning Platform',
    desc: 'Plataforma LMS com módulos de vídeo, quiz interativo e painel de progresso do aluno. Construída com Vue.js e Python/FastAPI.',
    tags: ['LMS', 'Vue.js', 'Python', 'FastAPI'],
  },
  {
    title: 'SaaS Analytics Landing',
    desc: 'Landing page de alta conversão para produto SaaS com animações GSAP, seções parallax e integração de formulário.',
    tags: ['Tailwind CSS', 'GSAP', 'React'],
  },
  {
    title: 'CloudOps Nexus',
    desc: 'Enterprise-grade infrastructure monitoring tool focused on real-time container health and automated deployment pipelines.',
    tags: ['Node.js', 'Docker', 'Redis', 'Vue'],
  },
  {
    title: 'API Sentinel',
    desc: 'Scalable microservices orchestration using FastAPI and Redis for low-latency data processing.',
    tags: ['FastAPI', 'Redis', 'Python', 'Docker'],
  },
]

useScrollReveal()
</script>
