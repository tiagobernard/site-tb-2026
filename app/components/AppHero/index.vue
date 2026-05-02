<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-10">
    <!-- Background tertiary blob (asymmetric depth layer) -->
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-tertiary) 0%, transparent 70%); filter: blur(80px);" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-8"
      style="background: radial-gradient(circle, var(--color-primary-container) 0%, transparent 70%); filter: blur(60px);" />

    <UContainer class="relative flex z-10 py-24 md:py-28 lg:py-32">
      <div>
        <div class="md:max-w-lg lg:max-w-4xl">
          <!-- Label tag -->
          <div class="reveal glass-panel py-2 px-4 rounded-xl max-w-fit label-tag mb-6"
            style="color: var(--color-primary);">
            Especialista em Desenvolvimento Web
          </div>

          <!-- Headline — asymmetric, editorial weight -->
          <h1 class="reveal display-md min-[1367px]:display-lg mb-6 font-black tracking-tighter"
            style="color: var(--color-on-surface); animation-delay: 0.1s;">
            Tiago Bernardes<br />
            Especialista em<br />
            <span class="text-transparent bg-clip-text"
              style="background-image: linear-gradient(to right, var(--color-primary), var(--color-tertiary), var(--color-primary-container));">GenAI
              Web Dev</span> de Alta Performance.
          </h1>

          <!-- Subtítulo -->
          <p class="reveal text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style="color: var(--color-on-surface-variant); animation-delay: 0.2s;">
            Especialista em unir Engenharia de Software e Inteligência Artificial para construir sistemas escaláveis,
            arquiteturas robustas e experiências digitais de alta performance.
          </p>

          <!-- CTAs -->
          <div class="reveal flex flex-wrap gap-4" style="animation-delay: 0.3s;">
            <UButton as="a" href="#portfolio" size="lg"
              class="gradient-primary font-mono font-semibold tracking-wide px-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style="color: var(--color-on-primary); border: none;">
              Ver Projetos
            </UButton>
            <UButton as="a" href="#contato" size="lg" variant="ghost"
              class="font-mono font-semibold tracking-wide px-8 border transition-all duration-200 hover:-translate-y-0.5"
              style="color: var(--color-primary); border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);">
              Fale Comigo
            </UButton>
          </div>

          <!-- Stats strip -->
          <div class="reveal mt-10 flex flex-wrap gap-8" style="animation-delay: 0.4s;">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
              <span class="text-3xl font-bold" style="color: var(--color-primary);">{{ stat.value }}</span>
              <span class="text-sm font-mono tracking-wide" style="color: var(--color-on-surface-variant);">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Right column: Profile Image & Quote / Bio Card -->
      <div class="hidden md:flex flex-col items-center justify-center flex-1 pl-8 lg:pl-16 gap-8 lg:gap-12">
        <!-- Profile Image -->
        <div class="reveal relative group lg:-mb-30" style="animation-delay: 0.25s;">
          <!-- Stylistic glow effect -->
          <div
            class="absolute inset-0 rounded-full blur-2xl opacity-40 translate-y-2 scale-105 transition-opacity duration-500 group-hover:opacity-60"
            style="background: linear-gradient(135deg, var(--color-primary), var(--color-tertiary));"
            aria-hidden="true">
          </div>
          <!-- Avatar with gradient border -->
          <div
            class="relative w-56 h-56 md:w-56 md:h-56 lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem] rounded-full p-[3px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            style="background: linear-gradient(135deg, var(--color-primary), var(--color-tertiary), var(--color-primary-container));">
            <img src="/imagens/perfil/tiago-bernardes-genai-developer.png"
              alt="Tiago Bernardes - Especialista em Desenvolvimento GenAI"
              class="w-full h-full object-cover rounded-full" style="background-color: var(--color-surface);" />
          </div>
        </div>

        <!-- Quote / Bio Card -->
        <div class="reveal glass-panel rounded-2xl p-8 max-w-md w-full relative mt-auto" style="animation-delay: 0.35s;">
          <!-- Quote icon badge -->
          <div
            class="absolute -top-4 -left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black leading-none"
            style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container)); color: var(--color-on-primary);"
            aria-hidden="true">"</div>

          <!-- Quote body -->
          <blockquote class="text-lg italic leading-relaxed mb-8" style="color: var(--color-on-surface);">
            "Curso Superior em Tecnologia no 5º período.
            Atualmente estou focado em GenAI, Gestão Ágil e Engenharia de Software de Alta Performance."
          </blockquote>

          <!-- Divider + location -->
          <footer class="flex items-center gap-4">
            <span class="block h-0.5 w-10 rounded-full shrink-0"
              style="background: linear-gradient(90deg, var(--color-primary), var(--color-primary-container));"
              aria-hidden="true" />
            <p class="label-tag" style="color: var(--color-on-surface-variant);">
              Minas Gerais, Brasil
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
  { value: '100%', label: 'Foco em Performance' },
]

useScrollReveal()
</script>
