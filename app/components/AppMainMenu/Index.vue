<template>
  <ul :class="[
    'flex',
    direction === 'horizontal' ? 'flex-row items-center gap-6' : 'flex-col gap-2'
  ]">
    <li v-for="link in navLinks" :key="link.to">
      <NuxtLink 
        :to="link.to"
        class="text-sm font-mono font-medium tracking-wide transition-colors duration-200 hover:opacity-100"
        :class="[
           direction === 'vertical' && mobile ? 'block px-3 py-2 rounded-lg opacity-70' : 'opacity-70'
        ]"
        style="color: var(--color-on-surface);"
        @click="$emit('link-click')"
      >
        {{ link.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value)
  },
  mobile: {
    type: Boolean,
    default: false
  }
})

defineEmits(['link-click'])

const navLinks = [
  { label: 'Início', to: '/#home' },
  { label: 'Habilidades', to: '/#habilidades' },
  { label: 'Serviços', to: '/#servicos' },
  { label: 'Portfólio', to: '/#portfolio' },
  { label: 'Blog', to: '/#blog' },
  { label: 'Contato', to: '/#contato' },
]
</script>
