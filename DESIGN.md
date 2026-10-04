# DESIGN.md — Tiago Bernardes

## Status

Documento reconstruído a partir do histórico técnico disponível.

Importante: o export analisado contém decisões claras de tipografia e posicionamento, mas não contém uma especificação visual completa equivalente ao `DESIGN.md` da Lab82. Portanto, este documento separa decisões confirmadas de princípios que devem ser validados contra o código atual antes de uma grande reformulação visual.

## Identidade

O site representa Tiago Bernardes como:

- GenAI Developer;
- AI Orchestrator;
- desenvolvedor orientado por agentes;
- profissional técnico com foco em performance e engenharia web.

A interface deve comunicar:

- domínio técnico;
- modernidade;
- precisão;
- criatividade;
- uso pragmático de IA.

Evitar:
- visual de “guru de IA”;
- excesso de efeitos holográficos;
- estética genérica de landing page AI;
- excesso de gradientes sem função.

## Tipografia confirmada

O histórico do projeto confirma uso de:

- JetBrains Mono;
- Inter.

Direção:

### JetBrains Mono

Usar em:

- títulos;
- elementos técnicos;
- números;
- labels;
- detalhes de identidade.

### Inter

Usar em:

- texto corrido;
- descrições;
- navegação;
- conteúdo editorial.

## Conteúdo

O portfólio deve privilegiar:

- projetos reais;
- stack utilizada;
- problemas resolvidos;
- decisões técnicas;
- resultados verificáveis;
- experiência com agentes.

O conteúdo não deve depender de números ou afirmações não comprovadas.

## Portfólio

O portfólio é uma parte central da identidade.

Cada projeto deve deixar claro:

- nome;
- contexto;
- tecnologia;
- problema;
- solução;
- resultado quando houver dado verificável.

As imagens devem carregar rapidamente e manter qualidade suficiente para apresentação profissional.

## Hero

O hero deve comunicar rapidamente:

1. quem é Tiago;
2. qual é sua especialidade;
3. qual é seu diferencial;
4. para onde o visitante pode seguir.

O conteúdo textual do hero deve ser renderizado de forma imediata.

Evitar que:
- canvas;
- animações;
- fontes;
- imagens decorativas;
- JavaScript pesado

bloqueiem a compreensão do hero ou prejudiquem LCP.

## Blog / conteúdo técnico

O projeto possui estrutura de posts baseada em JSON local.

O design dos artigos deve priorizar:

- legibilidade;
- boa largura de linha;
- hierarquia clara;
- código legível;
- headings sem excesso de ornamentação;
- boa experiência mobile.

## Performance visual

A estética deve estar subordinada à performance.

Preferir:

- CSS;
- SVG;
- animações leves;
- assets otimizados;
- lazy loading fora da dobra.

Evitar:
- vídeos pesados como fundo;
- canvas desnecessário;
- efeitos que impeçam o conteúdo de aparecer;
- bibliotecas de animação para microinterações simples.

## Responsividade

Mobile não deve ser apenas uma versão reduzida do desktop.

Priorizar:

- leitura;
- navegação;
- CTAs;
- imagens de projetos;
- artigos;
- espaçamento;
- performance.

## Paleta

**Não existe no export analisado uma paleta completa confirmada para o site pessoal.**

Portanto, agentes NÃO devem inventar uma nova paleta como se fosse decisão aprovada.

Antes de alterar cores globalmente:

1. verificar `app/assets`, `globals.css`, Tailwind config ou tokens atuais;
2. identificar as cores realmente utilizadas;
3. preservar a identidade existente;
4. somente depois propor uma evolução visual.

## Regra de ouro

> A interface deve parecer o portfólio de um profissional que realmente constrói sistemas com IA, não um site que apenas usa IA como tema visual.
