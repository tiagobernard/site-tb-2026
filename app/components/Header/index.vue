<template>
  <header ref="navRef" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-panel-subtle shadow-ambient' : 'bg-transparent'">
    <UContainer>
      <nav class="flex items-center justify-between h-16 md:h-18">
        <!-- Logo -->
        <AppLogo size="lg" class="group" />

        <!-- Desktop Nav -->
        <div class="hidden md:block">
          <AppMainMenu direction="horizontal" />
        </div>

        <!-- CTA Desktop -->
        <div class="hidden md:flex items-center gap-3">
          <UButton as="a" href="/#contato" size="sm"
            class="gradient-primary font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            style="color: var(--color-on-primary); border: none;">
            Fale Comigo
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
          <div class="py-4 flex flex-col gap-1">
            <AppMainMenu direction="vertical" mobile @link-click="mobileOpen = false" />
            <div class="pt-2">
              <UButton as="a" href="/#contact" size="sm" block class="gradient-primary font-semibold"
                style="color: var(--color-on-primary); border: none;" @click="mobileOpen = false">
                Fale Comigo
              </UButton>
            </div>
          </div>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { storeToRefs } from 'pinia'


const scrolled = ref(false)
const appStore = useAppStore()
const { isMenuOpen: mobileOpen } = storeToRefs(appStore)

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