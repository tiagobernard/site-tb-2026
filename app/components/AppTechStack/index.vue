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
          <!-- Icon -->
          <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                   group-hover:shadow-[0_0_16px_-2px_var(--color-primary)]"
            style="background-color: var(--color-surface-highest); color: var(--color-primary);">
            <UIcon :name="tech.icon" class="w-6 h-6" />
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
  icon: string
  desc: string
}

const techs: Tech[] = [
  { name: 'GenAI', icon: 'i-simple-icons-openai', desc: 'Generative Models' },
  { name: 'LLM', icon: 'i-simple-icons-anthropic', desc: 'Language Models' },
  { name: 'HTML5', icon: 'i-simple-icons-html5', desc: 'Semantic Markup' },
  { name: 'CSS3', icon: 'i-simple-icons-css3', desc: 'Modern Styling' },
  { name: 'Sass', icon: 'i-simple-icons-sass', desc: 'CSS Preprocessor' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', desc: 'ES6+ Features' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', desc: 'Static Typing' },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', desc: 'Progressive Framework' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', desc: 'Vue Framework' },
  { name: 'Pinia', icon: 'i-simple-icons-pinia', desc: 'State Management' },
  { name: 'Nuxt UI', icon: 'i-simple-icons-heroui', desc: 'Component Library' },
  { name: 'Tailwind', icon: 'i-simple-icons-tailwindcss', desc: 'Utility-first CSS' },
  { name: 'Cypress', icon: 'i-simple-icons-cypress', desc: 'E2E Testing' },
  { name: 'Storybook', icon: 'i-simple-icons-storybook', desc: 'UI Components' },
  { name: 'n8n', icon: 'i-simple-icons-n8n', desc: 'Workflow Automation' },
  { name: 'Python', icon: 'i-simple-icons-python', desc: 'Backend & Data' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', desc: 'JS Runtime' },
  { name: 'Docker', icon: 'i-simple-icons-docker', desc: 'Containerization' },
  { name: 'Git', icon: 'i-simple-icons-git', desc: 'Version Control' },
  { name: 'Figma', icon: 'i-simple-icons-figma', desc: 'UI/UX Design' },
  { name: 'WordPress', icon: 'i-simple-icons-wordpress', desc: 'CMS Solutions' },
  { name: 'Moodle', icon: 'i-simple-icons-moodle', desc: 'LMS Platform' },
  { name: 'macOS', icon: 'i-simple-icons-apple', desc: 'Operating System' },
  { name: 'cPanel', icon: 'i-simple-icons-cpanel', desc: 'Web Hosting Control' },
]

useScrollReveal()
</script>
