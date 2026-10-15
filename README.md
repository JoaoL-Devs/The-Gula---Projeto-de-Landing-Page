<<<<<<< HEAD
# The Gula 🍔

**Landing page interativa | Projeto autoral de estudo em desenvolvimento web**

A **The Gula** é uma marca fictícia de hamburgueria que criei para praticar o desenvolvimento de interfaces web, a construção de uma identidade visual e a integração de animações à navegação.

A proposta foi desenvolver uma landing page com apresentação de produtos, chamadas para ação e uma experiência visual em que **o hambúrguer é montado conforme o usuário rola a página**.

> **Projeto educacional.** A The Gula não é um estabelecimento em operação. Produtos, preços, contatos, endereço e demais informações comerciais apresentados no site são ilustrativos. Os botões de pedido demonstram um possível fluxo de navegação, mas não realizam vendas reais.

## Funcionalidades

- **Hero com identidade visual própria**, imagem de destaque e chamadas para ação.
- **Animação controlada pelo scroll:** a posição da rolagem é utilizada para ajustar o tempo do vídeo de montagem do hambúrguer.
- **Seção `sticky`** para manter a animação em evidência durante a navegação.
- **Cardápio demonstrativo** gerado dinamicamente com JavaScript, incluindo nomes, descrições e preços fictícios.
- **Seções institucionais e promocionais**, com apresentação da marca, combo, diferenciais e chamada final para ação.
- **Layout responsivo**, com adaptações para diferentes larguras de tela e menu de navegação mobile.
- **Efeitos de entrada ao rolar a página**, utilizando `IntersectionObserver`.
- **Cuidados iniciais de acessibilidade e SEO**, incluindo HTML semântico, textos alternativos, metadados e preferência por movimento reduzido.

## Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **HTML5** | Estrutura semântica e organização do conteúdo. |
| **CSS3** | Estilização, responsividade, composição das seções e transições. |
| **JavaScript** | Manipulação do DOM, cardápio dinâmico, navegação e controle da animação pelo scroll. |
| **HTML5 Video API** | Sincronização de `video.currentTime` com o progresso da rolagem. |
| **Intersection Observer API** | Revelação de elementos conforme entram na área visível. |

O projeto atual utiliza **HTML, CSS e JavaScript puro**, sem necessidade de framework, gerenciador de pacotes ou etapa de build.

## Ferramentas utilizadas no processo

Este projeto foi desenvolvido com apoio de ferramentas de inteligência artificial, usadas como suporte ao processo de criação e implementação:

- **Claude:** apoio na prototipação e na construção e evolução da interface.
- **ChatGPT:** apoio no planejamento, na elaboração e revisão de prompts, na análise de UX/UI e na identificação de ajustes técnicos.
- **Google Flow:** criação das animações utilizadas na experiência de montagem do hambúrguer.
- **Pinterest:** pesquisa de referências visuais e inspiração para a direção de arte.

**Minha participação:** idealizei a The Gula e o conceito da landing page, defini a direção visual e a experiência desejada, acompanhei as iterações e apliquei meus conhecimentos de **HTML, CSS e JavaScript** para revisar, adaptar e ajustar a implementação. O uso de IA fez parte do meu processo de aprendizado; não significa que todo o código tenha sido escrito manualmente do zero.

## Estrutura do projeto

```text
the-gula-organizado/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── hero-the-gula.jpg
│   ├── hamburguer-montagem.mp4
│   ├── hamburguer-poster.jpg
│   ├── hamburguer-final.jpg
│   ├── batata-frita.jpg
│   └── cta-the-gula.jpg
└── README.md
```

A estrutura foi dividida por responsabilidade: HTML para a estrutura, CSS para a apresentação, JavaScript para as interações e `assets/` para as mídias. As imagens e o vídeo, anteriormente embutidos em Base64, agora são arquivos independentes, facilitando manutenção e substituição.

## Como executar localmente

1. Baixe ou clone o repositório.
2. Na raiz do projeto, abra `index.html` em um navegador atualizado. Para maior compatibilidade, sirva os arquivos por um servidor local (por exemplo, **Live Server** no VS Code).
3. Para trocar imagens ou vídeo, substitua os arquivos na pasta `assets/` ou atualize seus caminhos no objeto `MEDIA`, em `js/script.js`.

Não é necessário instalar dependências ou executar uma etapa de build. É necessária conexão à internet para carregar as fontes do Google Fonts.

## Aprendizados

Durante o desenvolvimento, pratiquei especialmente:

- Estruturação de uma landing page orientada à apresentação de produto e à conversão.
- Hierarquia visual, contraste, tipografia e responsividade.
- Manipulação de elementos e eventos com JavaScript.
- Integração de animação em vídeo com a posição do scroll.
- Revisão de protótipos e resolução de problemas de layout.
- Uso de ferramentas de IA como apoio técnico e criativo, com avaliação crítica dos resultados.

## Melhorias planejadas

O projeto continua sendo aprimorado. As próximas etapas incluem:

- [x] Organizar o CSS, JavaScript e as mídias em arquivos separados.
- [ ] Reduzir o peso da página e otimizar o carregamento de imagens e vídeo.
- [ ] Refinar o enquadramento e o comportamento da animação em dispositivos móveis.
- [ ] Substituir imagens ilustrativas repetidas por materiais específicos para cada produto.
- [ ] Testar a experiência em mais navegadores e dispositivos.
- [ ] Executar uma auditoria de acessibilidade e performance com ferramentas apropriadas.

## Autoria e direitos

A **The Gula**, enquanto conceito de marca fictícia e proposta original desta landing page, foi idealizada por **João Lucas** para fins de estudo e portfólio.

**© 2026 João Lucas — direitos reservados sobre os elementos autorais originais do projeto.** Esta declaração de autoria não constitui afirmação de registro de marca.

Imagens, referências visuais, fontes, animações e outros materiais eventualmente produzidos por terceiros ou por ferramentas externas podem estar sujeitos a direitos e condições de uso próprios. O Pinterest foi utilizado como fonte de inspiração e pesquisa visual, não como licença de reutilização de imagens. A publicação ou reutilização de materiais de terceiros deve respeitar as autorizações correspondentes.

---

*Projeto desenvolvido para aprendizado, experimentação e apresentação de habilidades em desenvolvimento web.*
=======
# The-Gula---Projeto-de-Landing-Page
Landing page fictícia de hamburgueria com HTML, CSS, JavaScript e animações interativas controladas pelo scroll.
>>>>>>> 661a0e2695c35c30bc9056e9465068fbebcaa198
