<template>
  <footer style="background-color: var(--color-surface-dim); border-top: 1px solid var(--color-outline-variant);">
    <UContainer>
      <div class="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Brand -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold gradient-primary"
              style="color: var(--color-on-primary);">TB</span>
            <span class="font-semibold text-sm" style="color: var(--color-on-surface);">Tiago Bernardes</span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" style="color: var(--color-on-surface-variant);">
            Especialista em Desenvolvimento Web & GenAI. Arquitetando sistemas escaláveis e experiências digitais de
            alta performance.
          </p>
        </div>

        <!-- Navigation links -->
        <nav aria-label="Footer navigation">
          <AppMainMenu direction="vertical" />
        </nav>

        <!-- Social + legal links -->
        <div class="flex flex-col gap-4 md:items-end">
          <AppSocialLinks size="sm" />
          <div class="flex gap-4">
            <a href="/documents/curriculo-Tiago-Bernardes-Especialista-GenAI-Web.pdf" target="_blank" download class="label-tag opacity-50 hover:opacity-100 transition-opacity"
              style="color: var(--color-on-surface-variant);">Baixar Currículo (PDF)</a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
        style="border-color: var(--color-outline-variant);">
        <p class="label-tag opacity-40" style="color: var(--color-on-surface);">
          © 2026 Tiago Bernardes. Todos os direitos reservados.
        </p>
        <p class="label-tag opacity-40" style="color: var(--color-on-surface);">
          Desenvolvido com Nuxt 4 + Nuxt UI
        </p>
        <img alt="GitHub last commit"
          src="https://img.shields.io/github/last-commit/tiagobernard/site-tb-2026?label=%C3%BAltima%20atualiza%C3%A7%C3%A3o&logo=git">
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">



</script>