import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isMenuOpen = ref(false)
  const isDark = ref(true)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function setMenuState(state: boolean) {
    isMenuOpen.value = state
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return {
    isMenuOpen,
    isDark,
    toggleMenu,
    setMenuState,
    toggleTheme
  }
})
