<template>
  <section id="contato" class="py-24 relative overflow-hidden" style="background-color: var(--color-surface-low);">
    <!-- Tertiary glow accent -->
    <div aria-hidden="true" class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[500px] h-[500px] rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%); filter: blur(80px);" />

    <UContainer class="relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Label -->
        <p class="reveal label-tag mb-4" style="color: var(--color-tertiary);">Vamos Conversar</p>

        <!-- Headline -->
        <h2 class="reveal display-md mb-6" style="color: var(--color-on-surface); animation-delay: 0.1s;">
          Vamos construir algo<br />
          <span style="color: var(--color-primary);">extraordinário?</span>
        </h2>

        <!-- Subtext -->
        <p class="reveal text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style="color: var(--color-on-surface-variant); animation-delay: 0.2s;">
          Estou disponível para novas oportunidades e colaborações estratégicas.
          Entre em contato através dos canais abaixo e vamos transformar sua ideia em uma arquitetura digital de alta performance.
        </p>

        <!-- Social links -->
        <div class="reveal flex justify-center mt-8 mb-4" style="animation-delay: 0.3s;">
          <AppSocialLinks size="lg" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()
</script>
