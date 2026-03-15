// Composable to add scroll-reveal behavior to .reveal elements
// Uses IntersectionObserver for performance (no scroll event listeners)
export function useScrollReveal() {
  onMounted(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    onUnmounted(() => observer.disconnect())
  })
}
