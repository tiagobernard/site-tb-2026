# claude.md — site-tb-2026

## Nome do Projeto
**site-tb-2026** — Site pessoal/portfólio de Tiago Bernardes, Especialista em Web Performance & GenAI.

---

## Visão Geral

Site pessoal de portfólio e blog construído com Nuxt 4. Apresenta hero, stack tecnológica, serviços, portfólio (bento grid com paginação), blog, formulário de contato e links sociais. Os dados de portfólio e blog são servidos como JSON estático em `/public/data/`. O site tem tema escuro permanente com design "Architectural Glass" (glassmorphism + gradientes).

**URL alvo:** tiagobernardes.com.br  
**Dono:** Tiago Bernardes (`tiago@tiagobernardes.com.br`)

---

## Stack / Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | Nuxt 4 (`future.compatibilityVersion: 4`) |
| UI Library | @nuxt/ui v4 (baseado em Tailwind v4 + Headless UI) |
| Estilo | Tailwind CSS v4 (via `@import "tailwindcss"`) |
| Estado | Pinia v3 (`@pinia/nuxt`) |
| Imagens | @nuxt/image v2 — provider `none`, formato `webp` |
| Fontes | Inter + JetBrains Mono (Google Fonts) + @nuxtjs/fontaine |
| Ícones | Heroicons (`@iconify-json/heroicons`) + Simple Icons |
| Analytics | Google Analytics 4 (plugin client-only) |
| Testes E2E | Cypress 13 |
| Build/Deploy | Nitro — preset `node-server` |
| Runtime | Node.js (servidor) |

---

## Estrutura de Diretórios

```
site-tb-2026/
├── app/                        # Código-fonte principal (Nuxt 4 src dir)
│   ├── app.vue                 # Root: <NuxtLayout><NuxtPage />
│   ├── assets/
│   │   └── css/main.css        # Design tokens, utilitários globais, animações
│   ├── components/
│   │   ├── AppBlog/index.vue
│   │   ├── AppContact/index.vue
│   │   ├── AppHero/index.vue   # Seção hero com stats, foto e quote card
│   │   ├── AppLogo/index.vue
│   │   ├── AppMainMenu/Index.vue
│   │   ├── AppPortfolio/index.vue  # Bento grid + paginação
│   │   ├── AppServices/index.vue
│   │   ├── AppSocialLinks/index.vue
│   │   ├── AppTechStack/index.vue
│   │   ├── Footer/index.vue
│   │   └── Header/index.vue    # Navbar fixa + menu mobile
│   ├── composables/
│   │   └── useScrollReveal.ts  # IntersectionObserver para animação .reveal
│   ├── layouts/
│   │   └── default.vue         # Header + <slot /> + Footer
│   ├── pages/
│   │   ├── index.vue           # Home (compõe todas as seções)
│   │   ├── portfolio.vue       # Portfólio completo
│   │   ├── posts.vue           # Listagem de artigos
│   │   └── blog/[slug].vue     # Artigo individual (dinâmico)
│   ├── plugins/
│   │   └── google-analytics.client.ts  # GA4 — só no client, desativado em dev
│   ├── router.options.ts       # Scroll behavior customizado (hash + smooth)
│   ├── stores/
│   │   ├── app.ts              # isMenuOpen, isDark, toggleMenu, toggleTheme
│   │   └── auth.ts             # isAuthenticated, user, login, logout
│   └── types/
│       └── gtag.d.ts           # Tipos para window.gtag
├── cypress/
│   └── e2e/portfolio.cy.ts     # Testes E2E do portfólio (mobile + desktop)
├── cypress.config.js
├── public/
│   ├── data/
│   │   ├── portfolio.json      # Dados dos projetos (id, titulo, descricao, imagem, url_externa, tags[])
│   │   └── posts.json          # Dados dos artigos (titulo, slug, tags[], date, resumo, artigo HTML)
│   ├── documents/              # CV em PDF
│   ├── favicon.png
│   └── imagens/
│       ├── blog/               # Thumbnails dos posts (.webp)
│       ├── perfil/             # Foto do Tiago (.webp)
│       └── portfolio/          # Screenshots dos projetos (.webp)
├── .env                        # Variáveis locais (não commitar)
├── .env.example                # Template de variáveis
├── nuxt.config.ts              # Configuração central do Nuxt
├── package.json
└── tsconfig.json
```

---

## Configurações Importantes

### nuxt.config.ts
- `future.compatibilityVersion: 4` — usa Nuxt 4 com `app/` como srcDir
- `modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/fontaine']`
- `image.provider: 'none'` — imagens servidas localmente, sem CDN externo
- `image.format: ['webp']` — só webp
- `nitro.preset: 'node-server'` — servidor Node (não static/edge)
- `runtimeConfig.public.gaId` — ID do GA4, lido de `NUXT_PUBLIC_GA_ID`
- CSS global: `~/assets/css/main.css`
- Fontes: Inter + JetBrains Mono via Google Fonts no `app.head`

### Variáveis de Ambiente
```env
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # Google Analytics 4 Measurement ID
```

### Design System (main.css)
Tema escuro fixo — "Architectural Glass". Tokens via `@theme {}` do Tailwind v4:

| Token | Valor | Uso |
|---|---|---|
| `--color-surface` | `#0b1326` | Fundo base |
| `--color-surface-low` | `#131b2e` | Seções alternadas |
| `--color-primary` | `#9accf9` | Azul principal, links, destaques |
| `--color-tertiary` | `#f3bd6f` | Dourado — labels, acentos |
| `--color-on-surface` | `#dae2fd` | Texto principal |
| `--color-on-surface-variant` | `#c1c7cf` | Texto secundário |
| `--font-family-sans` | Inter | Corpo, títulos |
| `--font-family-mono` | JetBrains Mono | Labels, tags, código |

**Classes utilitárias globais:**
- `.glass-panel` — card translúcido com backdrop-filter blur(12px)
- `.glass-panel-subtle` — versão mais sutil (blur 20px, menos opaco)
- `.gradient-primary` — gradiente de primary → primary-container
- `.reveal` / `.reveal.is-visible` — animação fade-up (IntersectionObserver)
- `.display-lg`, `.display-md`, `.headline-lg`, `.label-tag` — utilitários tipográficos

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento (localhost:3000)

# Build e Preview
npm run build            # Build para produção (node-server)
npm run generate         # Geração estática
npm run preview          # Preview do build local

# Testes E2E
npm run test:e2e         # Abre Cypress interativo
npm run test:e2e:run     # Roda Cypress headless (inicia o servidor automaticamente)

# Preparar tipos
npm run postinstall      # nuxt prepare (automático após npm install)
```

---

## Convenções de Código

- **TypeScript** em todos os arquivos `.ts` e `<script setup lang="ts">`
- **Composition API** com `<script setup>` — sem Options API
- **Auto-imports** do Nuxt: `ref`, `computed`, `onMounted`, `useRoute`, `useSeoMeta`, `useAsyncData`, `$fetch`, `definePageMeta` — **não importar manualmente**
- **Pinia stores** em formato Composition API (`defineStore('id', () => { ... })`)
- **Componentes** em PascalCase, organizados em pastas com `index.vue` (ex: `AppHero/index.vue`)
- **Inline styles** para design tokens CSS: `style="color: var(--color-primary);"` — evitar hardcoded hex
- **Nomes de imagens**: padrão descritivo com prefixo (ex: `lab82-projetos-portfolio-nome.webp`)
- **Idioma do código**: inglês para nomes de variáveis/funções; português para copy/texto do site

---

## Componentes e Práticas

### Animação Scroll Reveal
Use o composable `useScrollReveal()` importado de `~/composables/useScrollReveal.ts`. Ele observa elementos com a classe `.reveal` e adiciona `.is-visible` ao entrar na viewport (threshold 0.12, via IntersectionObserver). Suporta `prefers-reduced-motion`.

```vue
<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
useScrollReveal()
</script>

<!-- No template: -->
<div class="reveal" style="animation-delay: 0.1s;">...</div>
```

**Atenção:** `AppPortfolio` implementa sua própria lógica de reveal (não usa o composable) para suportar re-observação após paginação.

### Header
- Fixed, transparente no topo, glass-panel após scroll (>30px)
- Estado `mobileOpen` vem do `useAppStore().isMenuOpen` via `storeToRefs`
- Transição `slide-down` com CSS Transition para o menu mobile

### AppPortfolio
- Prop `preview?: boolean` — em `true` mostra apenas 6 itens (home page)
- Layout Bento Grid responsivo: 1 col mobile → 8 cols md → 12 cols lg
- Paginação só no modo completo (`!preview`)
- Hover reveal de conteúdo via CSS grid-rows transition (`0fr` → `1fr`)
- Touch fix: `@media (hover: none)` força visibilidade em iPad/touch

### Roteamento
- Hash links (`/#portfolio`, `/#contato`) resolvidos com delay de 500ms para aguardar hidratação
- Scroll para o topo com delay de 100ms ao trocar de página

---

## Gerenciamento de Estado (Pinia)

### `useAppStore` (`app/stores/app.ts`)
```ts
isMenuOpen: boolean   // Estado do menu mobile
isDark: boolean       // Tema (sempre dark por ora, toggle disponível)
toggleMenu()
setMenuState(state: boolean)
toggleTheme()
```

### `useAuthStore` (`app/stores/auth.ts`)
```ts
isAuthenticated: boolean
user: Record<string, any> | null
login(userData)
logout()
```
> Auth store existe para uso futuro — não há área protegida atualmente.

---

## Data Fetching

Todos os dados são estáticos em `/public/data/`. Padrão de busca:

```ts
// Client-only (server: false) — padrão do projeto
const { data, pending, error } = useAsyncData('key', async () => {
  return await $fetch<Type[]>('/data/arquivo.json')
}, { server: false, default: () => [] })
```

- **Portfolio:** `/data/portfolio.json` → `PortfolioItem[]` (id, titulo, descricao, imagem, url_externa, tags[])
- **Posts/Blog:** `/data/posts.json` → `BlogPost[]` (titulo, slug, tags[], date, resumo, artigo)
- O campo `artigo` dos posts contém **HTML puro** — renderizado com `v-html`
- Artigo individual: busca o JSON completo e filtra por `slug`

---

## Testes

**Framework:** Cypress 13 (E2E)

```bash
npm run test:e2e         # UI interativa
npm run test:e2e:run     # Headless CI (usa start-server-and-test)
```

**Arquivo:** `cypress/e2e/portfolio.cy.ts`

Cobre:
- Mobile (iPhone XR): título e botão "Acessar" visíveis imediatamente
- Desktop (1280px): conteúdo oculto inicialmente, revela no hover
- Paginação: items da página 2 recebem animação reveal corretamente

> Não há testes unitários ou de componentes. Se adicionar, sugerir Vitest + @vue/test-utils.

---

## Diretrizes para IA

1. **Não altere o design system** — tokens em `main.css` são a fonte da verdade. Use sempre `var(--color-*)` e as classes utilitárias (`.glass-panel`, `.gradient-primary`, `.reveal`, `.label-tag`, etc).
2. **Auto-imports Nuxt** — não importe `ref`, `computed`, `useAsyncData`, `$fetch`, `useSeoMeta`, `definePageMeta`, etc. O Nuxt injeta automaticamente.
3. **Composables e stores**: prefira `useScrollReveal()` para animações novas. Use `useAppStore()` para estado global do menu/tema.
4. **Novas seções/componentes**: siga o padrão de pasta com `index.vue` (ex: `app/components/NovaSec/index.vue`). Adicione `useScrollReveal()` e classe `.reveal` nos elementos.
5. **Imagens**: sempre use `<NuxtImg>` com `format="webp"`, `loading="lazy"` (ou `eager` se LCP), e `sizes` responsivo. Imagens novas vão em `public/imagens/` com nomes descritivos em kebab-case.
6. **Dados**: portfólio e posts são JSON estáticos em `public/data/`. Para adicionar conteúdo, edite esses arquivos diretamente — sem backend ou CMS.
7. **Tipagem**: defina interfaces locais nos componentes quando necessário. Evite `any` — use `Record<string, unknown>` ou tipos específicos.
8. **Google Analytics**: o plugin já rastreia `page_view` em cada navegação. Para eventos customizados, use `window.gtag?.('event', ...)`.
9. **Nunca use tema claro** — o site é dark-only. O token `isDark` em `useAppStore` existe para uso futuro.
10. **Artigos do blog**: o campo `artigo` é HTML. Se criar conteúdo novo, siga o padrão de estilização do `.artigo-container :deep()` em `blog/[slug].vue`.

---

## Links Úteis

- [Nuxt 4 Docs](https://nuxt.com/docs)
- [Nuxt UI v3 Components](https://ui.nuxt.com/components)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Pinia Docs](https://pinia.vuejs.org/)
- [@nuxt/image Docs](https://image.nuxt.com/)
- [Heroicons](https://heroicons.com/)
- [Cypress Docs](https://docs.cypress.io/)
