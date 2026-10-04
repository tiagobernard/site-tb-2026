# AGENTS.md — Tiago Bernardes

## Identidade do projeto

Site pessoal/portfólio de Tiago Bernardes.

Posicionamento registrado no projeto:
- GenAI Developer;
- AI Orchestrator;
- desenvolvimento orientado por agentes de IA;
- atuação ligada à Lab82.

## Stack confirmada

- Nuxt 4;
- estrutura moderna `app/`;
- Tailwind CSS v4;
- TypeScript/JavaScript conforme o estado atual do projeto;
- dados locais em JSON;
- Git/GitHub.

## Arquitetura

- Respeitar a estrutura Nuxt 4 existente.
- Não reestruturar o projeto apenas por preferência pessoal.
- Usar os recursos nativos do Nuxt antes de adicionar bibliotecas externas.
- Para dados locais existentes, preservar a estratégia adotada no projeto.
- O projeto utiliza arquivos JSON locais, incluindo:
  - `portfolio.json`;
  - `posts.json`.

Quando esses dados forem consumidos no Nuxt, preferir `$fetch` nativo conforme a arquitetura já estabelecida, em vez de introduzir Axios sem necessidade.

## Imagens

O projeto teve problemas reais com o processamento de imagens no ambiente cPanel/IPX.

Regras:

- preferir assets compatíveis com o ambiente de produção;
- WebP já foi utilizado para resolver incompatibilidades;
- respeitar exatamente maiúsculas/minúsculas dos caminhos;
- antes de declarar que uma imagem está quebrada, conferir:
  1. arquivo físico;
  2. caminho;
  3. case;
  4. configuração Nuxt;
  5. comportamento no ambiente de produção.

Não reintroduzir uma configuração de imagem que já causou erro 500 sem validar a necessidade.

## SSR / geração

O projeto passou por testes entre SSR e SSG.

A decisão final registrada na migração para Cloudflare foi utilizar geração/pré-renderização com SSR habilitado no Nuxt durante o processo de geração, para garantir HTML completo nas páginas.

Portanto:

- não mudar `ssr` por preferência;
- não trocar `npm run build` por `npm run generate`, ou vice-versa, sem verificar o deployment atual;
- qualquer mudança deve considerar o destino de hospedagem e a necessidade de HTML pré-renderizado.

## Performance

Performance é requisito do projeto.

Histórico relevante:

- LCP de aproximadamente 2,35s no ambiente anterior;
- preload aplicado à imagem principal do hero;
- após a migração e ajustes de pré-renderização, LCP chegou a aproximadamente 2,12s no navegador Arc no Cloudflare.

Ao trabalhar no hero:

- preservar carregamento prioritário do conteúdo principal;
- evitar JavaScript desnecessário acima da dobra;
- não adicionar animações pesadas sem necessidade;
- validar Core Web Vitals após alterações relevantes.

## Deploy

O projeto utiliza GitHub para versionamento e deploy automático.

Cloudflare Pages foi utilizado para a hospedagem do site.

Regras importantes:

- não reintroduzir `wrangler.toml`/configuração de Workers sem necessidade;
- Cloudflare Pages e Cloudflare Workers são produtos diferentes;
- não configurar `wrangler deploy` como se fosse Pages;
- conferir build command e output directory antes de alterar o pipeline.

O projeto já passou por problemas de double-build e configuração incorreta de Worker. Não repetir essas configurações.

## DNS e e-mail

O domínio é gerenciado via Cloudflare e registrado no Registro.br.

O site e o e-mail são serviços separados.

O e-mail permanece associado ao servidor da ValueHost/cPanel.

Regra crítica:

> nunca alterar DNS do site sem verificar os registros de e-mail.

O histórico mostrou que um CNAME de `mail` entrou em conflito com o MX.

A solução aplicada foi:

- remover o CNAME de `mail`;
- criar A record de `mail` apontando para o servidor de e-mail;
- manter proxy desativado para o host de e-mail.

Não repetir essa alteração automaticamente: primeiro inspecionar o estado atual da zona DNS.

## cPanel

O projeto anteriormente foi executado em Node.js via cPanel.

Configurações que fizeram parte do ambiente anterior:

- `NODE_ENV=production`;
- startup `server/index.mjs`;
- `package.json` e `package-lock.json` na raiz;
- instalação de dependências no servidor.

Essas configurações são históricas. Não presumir que ainda sejam necessárias após a migração para Cloudflare.

## Git

Fluxo esperado:

```text
local
  ↓
git commit
  ↓
git push
  ↓
GitHub
  ↓
deploy automático
```

Não fazer deploy manual se o pipeline automático já estiver configurado.

## Conteúdo

O site é um portfólio profissional.

Preservar:

- clareza;
- autoridade técnica;
- linguagem humana;
- demonstração de projetos;
- posicionamento como desenvolvedor e orquestrador de IA.

Não inventar clientes, resultados, métricas ou tecnologias que não estejam confirmados.

## Regra de ouro

> O site deve comunicar competência técnica e uso real de IA/agentes sem transformar a interface em uma demonstração genérica de “AI hype”.
