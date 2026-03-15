<template>
  <header ref="navRef" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-panel-subtle shadow-ambient' : 'bg-transparent'">
    <UContainer>
      <nav class="flex items-center justify-between h-16 md:h-18">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group" aria-label="Tiago Bernardes – Início">
          <span class="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold gradient-primary"
            style="color: var(--color-on-primary);">TB</span>
          <span class="hidden sm:block font-semibold text-sm" style="color: var(--color-on-surface);">
            Tiago Bernardes
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-6">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="text-sm font-medium transition-colors duration-200 hover:opacity-100 opacity-70"
              style="color: var(--color-on-surface);">{{ link.label }}</a>
          </li>
        </ul>

        <!-- CTA Desktop -->
        <div class="hidden md:flex items-center gap-3">
          <UButton as="a" href="#contact" size="sm"
            class="gradient-primary font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            style="color: var(--color-on-primary); border: none;">
            Get in Touch
          </UButton>
        </div>

        <!-- Mobile Hamburger -->
        <UButton id="mobile-menu-btn" variant="ghost" size="sm" class="md:hidden"
          :icon="mobileOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
          :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'" @click="mobileOpen = !mobileOpen" />
      </nav>
    </UContainer>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="md:hidden glass-panel border-t" style="border-color: var(--color-outline-variant);">
        <UContainer>
          <ul class="py-4 flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href"
                class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-100 opacity-70"
                style="color: var(--color-on-surface);" @click="mobileOpen = false">{{ link.label }}</a>
            </li>
            <li class="pt-2">
              <UButton as="a" href="#contact" size="sm" block class="gradient-primary font-semibold"
                style="color: var(--color-on-primary); border: none;" @click="mobileOpen = false">
                Get in Touch
              </UButton>
            </li>
          </ul>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  const handler = () => {
    scrolled.value = window.scrollY > 30
  }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>