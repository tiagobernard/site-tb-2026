<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-16">
    <!-- Background tertiary blob (asymmetric depth layer) -->
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-tertiary) 0%, transparent 70%); filter: blur(80px);" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-8"
      style="background: radial-gradient(circle, var(--color-primary-container) 0%, transparent 70%); filter: blur(60px);" />

    <UContainer class="relative flex z-10 py-24 md:py-32">
      <div>
        <div class="max-w-4xl">
          <!-- Label tag -->
          <div class="reveal glass-panel py-2 px-4 rounded-xl max-w-fit label-tag mb-6"
            style="color: var(--color-primary);">
            Web
            Developer ·
            Especialista
          </div>

          <!-- Headline — asymmetric, editorial weight -->
          <h1 class="reveal display-lg mb-6" style="color: var(--color-on-surface); animation-delay: 0.1s;">
            Sou Tiago<br />
            <span style="color: var(--color-primary);">Bernardes,</span><br />
            <p class="text-4xl md:text-5xl font-semibold mt-4" style="color: var(--color-on-surface-variant);">
              Web Dev at CREAD/IFMG
            </p>
          </h1>

          <!-- Subtítulo -->
          <p class="reveal text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style="color: var(--color-on-surface-variant); animation-delay: 0.2s;">
            Crafting high-performance digital architectures with a focus on
            immersive user experiences and modern engineering principles.
          </p>

          <!-- CTAs -->
          <div class="reveal flex flex-wrap gap-4" style="animation-delay: 0.3s;">
            <UButton as="a" href="#portfolio" size="lg"
              class="gradient-primary font-semibold px-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style="color: var(--color-on-primary); border: none;">
              Explore Work
            </UButton>
            <UButton as="a" href="#contact" size="lg" variant="ghost"
              class="font-semibold px-8 border transition-all duration-200 hover:-translate-y-0.5"
              style="color: var(--color-primary); border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);">
              Get in Touch
            </UButton>
          </div>

          <!-- Stats strip -->
          <div class="reveal mt-16 flex flex-wrap gap-8" style="animation-delay: 0.4s;">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
              <span class="text-3xl font-bold" style="color: var(--color-primary);">{{ stat.value }}</span>
              <span class="text-sm" style="color: var(--color-on-surface-variant);">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Quote / Bio Card (right column) -->
      <div class="hidden lg:flex items-center justify-end flex-1 pl-16">
        <div class="reveal glass-panel rounded-2xl p-8 max-w-md w-full relative" style="animation-delay: 0.35s;">
          <!-- Quote icon badge -->
          <div
            class="absolute -top-4 -left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black leading-none"
            style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container)); color: var(--color-on-primary);"
            aria-hidden="true">"</div>

          <!-- Quote body -->
          <blockquote class="text-lg italic leading-relaxed mb-8" style="color: var(--color-on-surface);">
            "Curso Superior em Tecnologia no 5º período.
            Atualmente focado em dominar o ecossistema moderno
            com FastAPI, Docker e arquiteturas escaláveis."
          </blockquote>

          <!-- Divider + location -->
          <footer class="flex items-center gap-4">
            <span class="block h-0.5 w-10 rounded-full shrink-0"
              style="background: linear-gradient(90deg, var(--color-primary), var(--color-primary-container));"
              aria-hidden="true" />
            <p class="label-tag" style="color: var(--color-on-surface-variant);">
              Belo Horizonte, Brasil
            </p>
          </footer>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const stats = [
  { value: '20+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Entregues' },
  { value: '100%', label: 'Foco em Qualidade' },
]

useScrollReveal()
</script>
