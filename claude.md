# claude.md — site-tb-2026

> Versão enxuta para IA. Referência completa em `claude.full.md`.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Nuxt 4 (`future.compatibilityVersion: 4`, srcDir: `app/`) |
| UI | @nuxt/ui v4 (Tailwind v4 + Headless UI) |
| Estilo | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Estado | Pinia v3 — Composition API (`defineStore('id', () => {})`) |
| Imagens | @nuxt/image v2 — provider `none`, formato `webp` |
| Ícones | Heroicons + Simple Icons (via Iconify) |
| Testes | Cypress 13 (E2E) |
| Deploy | Nitro — preset `node-server` |

---

## Auto-imports Nuxt (não importar manualmente)

```ts
ref, reactive, computed, watch, onMounted,
useRoute, useRouter, useSeoMeta, useAsyncData,
$fetch, definePageMeta, useNuxtApp
```

---

## Design Tokens (sempre usar `var(--color-*)`, nunca hex)

```css
--color-surface: #0b1326        /* Fundo base */
--color-surface-low: #131b2e    /* Seções alternadas */
--color-primary: #9accf9        /* Azul principal, links */
--color-tertiary: #f3bd6f       /* Dourado, labels, acentos */
--color-on-surface: #dae2fd     /* Texto principal */
--color-on-surface-variant: #c1c7cf  /* Texto secundário */
--font-family-sans: Inter
--font-family-mono: JetBrains Mono
```

**Classes utilitárias globais:**
- `.glass-panel` — card translúcido, backdrop-filter blur(12px)
- `.glass-panel-subtle` — versão mais sutil
- `.gradient-primary` — gradiente primary → primary-container
- `.reveal` / `.reveal.is-visible` — animação fade-up (IntersectionObserver)
- `.display-lg`, `.display-md`, `.headline-lg`, `.label-tag` — tipografia

---

## Convenções Críticas

- **TypeScript** em tudo — sem `any`, use `Record<string, unknown>` ou tipos específicos
- **Composition API** com `<script setup lang="ts">` — sem Options API
- **Componentes** em PascalCase, pasta com `index.vue` (ex: `AppHero/index.vue`)
- **Inline styles** para tokens: `style="color: var(--color-primary)"` — nunca hex hardcoded
- **Idioma**: inglês para código; português para copy/texto do site
- **Imagens**: sempre `<NuxtImg format="webp" loading="lazy" />`, nomes em kebab-case
- **Site dark-only** — nunca use tema claro, nunca hardcode cores fora dos tokens

---

## Data Fetching

Dados estáticos em `/public/data/`. Padrão:

```ts
const { data } = useAsyncData('key', () =>
  $fetch<Type[]>('/data/arquivo.json'),
  { server: false, default: () => [] }
)
```

- `portfolio.json` → `PortfolioItem[]`
- `posts.json` → `BlogPost[]` (campo `artigo` é HTML — usar `v-html`)

---

## Diretrizes para IA

1. **Design system intocável** — use sempre tokens e classes utilitárias definidas em `main.css`
2. **Sem imports manuais** de auto-imports Nuxt
3. **Novas seções**: pasta `app/components/NomeSec/index.vue` + `useScrollReveal()` + classe `.reveal`
4. **Imagens**: `<NuxtImg>` com `format="webp"`, `loading="lazy"`, `sizes` responsivo
5. **Dados**: edite os JSONs em `public/data/` — sem backend ou CMS
6. **GA4**: eventos customizados via `window.gtag?.('event', ...)`
7. **Nunca tema claro** — `isDark` em `useAppStore` existe para uso futuro