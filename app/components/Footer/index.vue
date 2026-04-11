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
            Software Engineer &amp; UI Architect. Crafting digital experiences with precision and purpose.
          </p>
        </div>

        <!-- Navigation links -->
        <nav aria-label="Footer navigation">
          <ul class="flex flex-col gap-2">
            <li v-for="link in footerLinks" :key="link.label">
              <a :href="link.href" class="text-sm transition-opacity duration-200 hover:opacity-100 opacity-60"
                style="color: var(--color-on-surface);">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Social + legal links -->
        <div class="flex flex-col gap-4 md:items-end">
          <div class="flex gap-3">
            <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label"
              target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                     hover:opacity-100 opacity-50 hover:-translate-y-0.5"
              style="background-color: var(--color-surface-high); color: var(--color-primary);">
              <UIcon :name="social.icon" class="w-4 h-4" />
            </a>
          </div>
          <div class="flex gap-4">
            <a href="/privacy" class="label-tag opacity-50 hover:opacity-100 transition-opacity"
              style="color: var(--color-on-surface-variant);">Privacy Policy</a>
            <a href="/terms" class="label-tag opacity-50 hover:opacity-100 transition-opacity"
              style="color: var(--color-on-surface-variant);">Terms of Service</a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
        style="border-color: var(--color-outline-variant);">
        <p class="label-tag opacity-40" style="color: var(--color-on-surface);">
          © 2026 Tiago Bernardes. All rights reserved.
        </p>
        <p class="label-tag opacity-40" style="color: var(--color-on-surface);">
          Built with Nuxt 4 + Nuxt UI
        </p>
        <img alt="GitHub last commit"
          src="https://img.shields.io/github/last-commit/tiagobernard/site-tb-2026?label=%C3%BAltima%20atualiza%C3%A7%C3%A3o&logo=git">
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tiagobernardess', icon: 'i-simple-icons-linkedin' },
  { label: 'GitHub', href: 'https://github.com/tiagobernardess', icon: 'i-simple-icons-github' },
  { label: 'Email', href: 'mailto:tiago@example.com', icon: 'i-heroicons-envelope' },
]
</script>