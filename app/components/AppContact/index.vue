<template>
  <section id="contact" class="py-24 relative overflow-hidden" style="background-color: var(--color-surface-low);">
    <!-- Tertiary glow accent -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[500px] h-[500px] rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%); filter: blur(80px);"
    />

    <UContainer class="relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Label -->
        <p class="reveal label-tag mb-4" style="color: var(--color-tertiary);">Vamos Conversar</p>

        <!-- Headline -->
        <h2
          class="reveal display-md mb-6"
          style="color: var(--color-on-surface); animation-delay: 0.1s;"
        >
          Vamos construir algo<br />
          <span style="color: var(--color-primary);">extraordinário?</span>
        </h2>

        <!-- Subtext -->
        <p
          class="reveal text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style="color: var(--color-on-surface-variant); animation-delay: 0.2s;"
        >
          I'm currently looking for new opportunities and collaborations.
          Drop a message and let's talk about your next project.
        </p>

        <!-- CTA Primary -->
        <div class="reveal mb-14" style="animation-delay: 0.3s;">
          <UButton
            as="a"
            href="mailto:tiago@example.com"
            size="xl"
            class="gradient-primary font-semibold px-12 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style="color: var(--color-on-primary); border: none;"
          >
            Enviar Mensagem
          </UButton>
        </div>

        <!-- Social links -->
        <div class="reveal flex items-center justify-center gap-4" style="animation-delay: 0.4s;">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200
                   hover:-translate-y-0.5 hover:opacity-100 opacity-60"
            style="background-color: var(--color-surface-high); color: var(--color-primary);"
          >
            <UIcon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tiagobernardess', icon: 'i-simple-icons-linkedin' },
  { label: 'GitHub', href: 'https://github.com/tiagobernardss', icon: 'i-simple-icons-github' },
  { label: 'Email', href: 'mailto:tiago@example.com', icon: 'i-heroicons-envelope' },
]

useScrollReveal()
</script>
