<template>
  <section id="about" class="py-24" style="background-color: var(--color-surface-low);">
    <UContainer>
      <!-- Section header -->
      <div class="reveal mb-14">
        <p class="label-tag mb-3" style="color: var(--color-tertiary);">Stack Tecnológico</p>
        <h2 class="headline-lg" style="color: var(--color-on-surface);">Tech Stack</h2>
        <p class="mt-3 max-w-xl text-base leading-relaxed" style="color: var(--color-on-surface-variant);">
          A curated selection of technologies I use to build scalable, resilient web applications.
        </p>
      </div>

      <!-- Tech grid -->
      <ul class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        <li v-for="(tech, i) in techs" :key="tech.name" class="reveal group flex flex-col items-center gap-3 p-5 rounded-xl cursor-default
                 transition-all duration-300 hover:-translate-y-1"
          style="background-color: var(--color-surface-high); animation-delay: calc(0.05s * var(--i));"
          :style="{ '--i': i }">
          <!-- Icon (SVG placeholder ring tinted primary) -->
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300
                   group-hover:shadow-[0_0_16px_-2px_var(--color-primary)]"
            style="background-color: var(--color-surface-highest); color: var(--color-primary);">
            {{ tech.abbr }}
          </div>
          <p class="text-xs font-semibold text-center" style="color: var(--color-on-surface);">{{ tech.name }}</p>
          <p class="label-tag text-center leading-tight" style="color: var(--color-on-surface-variant);">{{ tech.desc }}
          </p>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Tech {
  name: string
  abbr: string
  desc: string
}

const techs: Tech[] = [
  { name: 'GenAI', abbr: 'AI', desc: 'Generative Models' },
  { name: 'LLM', abbr: 'LM', desc: 'Language Models' },
  { name: 'HTML5', abbr: 'H5', desc: 'Semantic Markup' },
  { name: 'CSS3', abbr: 'C3', desc: 'Modern Styling' },
  { name: 'Sass', abbr: 'SS', desc: 'CSS Preprocessor' },
  { name: 'JavaScript', abbr: 'JS', desc: 'ES6+ Features' },
  { name: 'TypeScript', abbr: 'TS', desc: 'Static Typing' },
  { name: 'Vue.js', abbr: 'VU', desc: 'Progressive Framework' },
  { name: 'Nuxt.js', abbr: 'NX', desc: 'Vue Framework' },
  { name: 'Pinia', abbr: 'PN', desc: 'State Management' },
  { name: 'Nuxt UI', abbr: 'UI', desc: 'Component Library' },
  { name: 'Tailwind', abbr: 'TW', desc: 'Utility-first CSS' },
  { name: 'Cypress', abbr: 'CY', desc: 'E2E Testing' },
  { name: 'Storybook', abbr: 'SB', desc: 'UI Components' },
  { name: 'n8n', abbr: 'N8', desc: 'Workflow Automation' },
  { name: 'Python', abbr: 'PY', desc: 'Backend & Data' },
  { name: 'Node.js', abbr: 'ND', desc: 'JS Runtime' },
  { name: 'Docker', abbr: 'DK', desc: 'Containerization' },
  { name: 'Git', abbr: 'GT', desc: 'Version Control' },
  { name: 'Figma', abbr: 'FG', desc: 'UI/UX Design' },
  { name: 'WordPress', abbr: 'WP', desc: 'CMS Solutions' },
  { name: 'Moodle', abbr: 'MD', desc: 'LMS Platform' },
  { name: 'macOS', abbr: 'MC', desc: 'Operating System' },
  { name: 'cPanel', abbr: 'CP', desc: 'Web Hosting Control' },
]

useScrollReveal()
</script>
