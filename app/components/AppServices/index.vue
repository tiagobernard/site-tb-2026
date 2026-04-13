<template>
  <section id="services" class="py-24" style="background-color: var(--color-surface);">
    <UContainer>
      <!-- Section header -->
      <div class="reveal mb-14">
        <p class="label-tag mb-3" style="color: var(--color-tertiary);">O que eu faço</p>
        <h2 class="headline-lg" style="color: var(--color-on-surface);">Professional Services</h2>
      </div>

      <!-- Services grid — 3 glass cards, no dividers -->
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li
          v-for="(service, i) in services"
          :key="service.title"
          class="reveal glass-panel rounded-2xl p-8 flex flex-col gap-6
                 transition-all duration-300 hover:-translate-y-1
                 hover:border-opacity-20"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <!-- Icon ring -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style="background: linear-gradient(135deg, var(--color-primary-container), color-mix(in srgb, var(--color-primary-container) 60%, transparent));"
          >
            <UIcon :name="service.icon" class="w-6 h-6" style="color: var(--color-primary);" />
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-semibold" style="color: var(--color-on-surface);">{{ service.title }}</h3>
            <p class="text-sm leading-relaxed" style="color: var(--color-on-surface-variant);">{{ service.desc }}</p>
          </div>

          <!-- Subtle CTA -->
          <a
            href="#contact"
            class="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
            style="color: var(--color-primary);"
          >
            Saiba mais
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </a>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Service {
  title: string
  desc: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Aplicações de Alta Performance',
    desc: 'Sistemas web rápidos, escaláveis e sob medida para resolver os desafios mais complexos do seu negócio.',
    icon: 'i-heroicons-cpu-chip',
  },
  {
    title: 'UI/UX Design',
    desc: 'Interfaces intuitivas e impactantes que encantam os usuários e elevam o valor da sua marca.',
    icon: 'i-heroicons-paint-brush',
  },
  {
    title: 'Sites Institucionais',
    desc: 'Presença digital premium que transmite autoridade e conecta a sua marca com o público ideal.',
    icon: 'i-heroicons-building-office-2',
  },
  {
    title: 'E-commerce',
    desc: 'Lojas virtuais robustas e fluidas, otimizadas para maximizar suas vendas e a experiência de compra.',
    icon: 'i-heroicons-shopping-cart',
  },
  {
    title: 'Marketplaces',
    desc: 'Plataformas escaláveis para múltiplos vendedores com fluxos seguros e gestão inteligente.',
    icon: 'i-heroicons-building-storefront',
  },
  {
    title: 'Landing Pages',
    desc: 'Páginas de altíssima conversão projetadas para atrair leads qualificados e impulsionar o seu ROI.',
    icon: 'i-heroicons-rocket-launch',
  },
  {
    title: 'SEO Google',
    desc: 'Otimização orgânica avançada para colocar o seu negócio no topo do Google e dominar as pesquisas.',
    icon: 'i-heroicons-chart-bar',
  },
  {
    title: 'Hospedagem Dedicada',
    desc: 'Infraestrutura em nuvem segura, veloz e preparada para garantir alta disponibilidade constante.',
    icon: 'i-heroicons-server-stack',
  },
  {
    title: 'Servidores SMTP',
    desc: 'Infraestrutura confiável para envios de e-mails transacionais e de marketing com máxima entregabilidade.',
    icon: 'i-heroicons-envelope-open',
  },
]

useScrollReveal()
</script>
