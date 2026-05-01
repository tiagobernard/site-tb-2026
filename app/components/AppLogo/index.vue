<template>
  <NuxtLink to="/" :class="['logo-wrapper inline-flex items-center font-mono font-bold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-primary rounded', sizeClasses[size]]" aria-label="Tiago Bernardes – Início">
    <span class="bracket font-mono opacity-80 text-[var(--color-primary)]">&lt;</span>
    <span class="gradient-text font-mono">tb</span>
    <span class="bracket font-mono opacity-80 text-[var(--color-primary)]">/&gt;</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String as () => 'sm' | 'md' | 'lg' | 'xl',
    default: 'md'
  }
})

// Tamanho do símbolo <tb/>
const sizeClasses = {
  sm: 'text-xl gap-0.5',
  md: 'text-3xl gap-1',
  lg: 'text-4xl gap-1.5',
  xl: 'text-5xl gap-2'
}
</script>

<style scoped>
.logo-wrapper {
  /* Prevent layout shift */
  font-display: swap;
  line-height: 1;
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
