<template>
  <div class="flex items-center gap-3 md:gap-4 flex-wrap">
    <a v-for="link in socialLinks" :key="link.name" :href="link.url" :aria-label="link.name" target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:opacity-100 hover:shadow-lg"
      :class="[
        sizeClasses[size].container,
        'opacity-70'
      ]" style="background-color: var(--color-surface-high); color: var(--color-primary);">
      <UIcon :name="link.icon" :class="sizeClasses[size].icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  sm: {
    container: 'w-9 h-9 rounded-lg',
    icon: 'w-4 h-4'
  },
  md: {
    container: 'w-11 h-11 rounded-xl',
    icon: 'w-5 h-5'
  },
  lg: {
    container: 'w-14 h-14 rounded-2xl md:w-16 md:h-16',
    icon: 'w-6 h-6 md:w-7 md:h-7'
  }
}

const socialLinks = [
  { name: 'Email', url: 'mailto:tiago@lab82.dev', icon: 'i-simple-icons-maildotru' },
  { name: 'WhatsApp', url: 'https://wa.me/5531998407238', icon: 'i-simple-icons-whatsapp' },
  { name: 'Telegram', url: 'https://t.me/tiagobernard', icon: 'i-simple-icons-telegram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tiagobernard/', icon: 'i-simple-icons-linkedin' },
  { name: 'GitHub', url: 'https://github.com/tiagobernard', icon: 'i-simple-icons-github' },
]
</script>
