import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        // Um pequeno delay garante que a página destino (como a Home) 
        // e seus componentes dinâmicos (como o Portfólio) tenham tempo
        // de ser renderizados antes do navegador calcular a posição de scroll.
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 80, // Compensar a altura do header fixo (ajuste se necessário)
            behavior: 'smooth'
          })
        }, 500)
      })
    }

    if (to.path === from.path) {
      return
    }

    // Scroll para o topo ao trocar de página
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 100)
    })
  }
}
