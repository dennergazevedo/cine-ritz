
# CineRitz - Website do Cinema

Bem-vindo ao repositório do CineRitz, um website de um cinema criado para mostrar os filmes em exibição, próximos lançamentos e promoções. Este projeto foi desenvolvido utilizando Next.js e Prismic.io como CMS. Este README fornecerá todas as informações necessárias para entender, instalar e executar o projeto.

## Índice

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Uso do Prismic](#uso-do-prismic)
- [Considerações sobre Direitos Autorais](#considerações-sobre-direitos-autorais)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

-   **Página Inicial:** Exibe os filmes em exibição e as promoções atuais.
-   **Detalhes do Filme:** Página individual para cada filme com informações detalhadas.
-   **Promoções:** Exibe promoções e ofertas especiais do cinema.

## Tecnologias Utilizadas

-   **Next.js:** Framework React para desenvolvimento web.
-   **Prismic.io:** CMS para gerenciamento de conteúdo.
-   **Concurrently:** Executar múltiplos comandos simultaneamente.
-   **Prettier:** Ferramenta de formatação de código.

## Pré-requisitos

-   Node.js (versão 14 ou superior)
-   NPM ou Yarn
-   Conta no Prismic.io

## Instalação

1.  Clone o repositório:

    `git  clone  https://github.com/seu-usuario/cineritz.git  cd  cineritz`
    
2.  Instale as dependências:

    `npm install`
    
3.  Configure as variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do Prismic.io:
    
    `PRISMIC_API_ENDPOINT=https://seu-repositorio.prismic.io/api/v2 PRISMIC_ACCESS_TOKEN=seu-token`
    

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

-   **`dev`**: Inicia o servidor de desenvolvimento Next.js e o Prismic Slice Machine.
    
    `npm run dev`
    
-   **`next:dev`**: Inicia o servidor de desenvolvimento Next.js.
    
    `npm run next:dev`
    
-   **`build`**: Compila o projeto para produção.
    
    `npm run build`
    
-   **`start`**: Inicia o servidor Next.js em modo de produção.
    
    `npm run start`
    
-   **`lint`**: Verifica se há problemas de linting no código.
    
    `npm run lint`
    
-   **`slicemachine`**: Inicia o Prismic Slice Machine.
    
    `npm run slicemachine`
    
-   **`format`**: Formata o código usando Prettier.
    
    `npm run format`

## Uso do Prismic

Este projeto utiliza o Prismic.io para gerenciamento de conteúdo. Para configurar e utilizar o Prismic, siga os passos abaixo:

1.  Acesse [Prismic.io](https://prismic.io/) e crie uma conta.
2.  Crie um novo repositório para o seu projeto.
3.  Configure os Custom Types necessários no Prismic para gerenciar filmes, promoções, etc.
4.  Atualize as variáveis de ambiente no arquivo `.env.local` com as informações do seu repositório Prismic.

## Considerações sobre Direitos Autorais

Todas as logos, endereços e outras informações utilizadas neste projeto foram retiradas da internet e são usadas apenas para fins de estudo. Este projeto não tem intenção de violar direitos autorais. Se você possui os direitos de algum conteúdo utilizado e deseja que ele seja removido, por favor, entre em contato.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

1.  Fork o projeto
2.  Crie sua feature branch (`git checkout -b feature/nova-feature`)
3.  Commit suas mudanças (`git commit -am 'Adicionei uma nova feature'`)
4.  Push para a branch (`git push origin feature/nova-feature`)
5.  Abra um Pull Request

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.