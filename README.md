# Livros Vai na Web

Este é um projeto de plataforma onde usuários podem doar livros e visualizar os livros doados. O site permite que os usuários preencham um formulário com informações sobre o livro que desejam doar, como título, categoria, autor e link da imagem do livro. Os livros doados podem ser visualizados em uma lista de "Livros Doados".

## Funcionalidades

- **Adicionar livro**: Preencha um formulário com informações sobre o livro que deseja doar, incluindo título, categoria, autor e link para a imagem do livro.
- **Visualizar livros doados**: Veja uma lista dos livros doados, com a imagem e o título de cada livro.
- **Pesquisa**: Busque livros doados pela plataforma com a funcionalidade de busca.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **React Router**: Biblioteca para gerenciar as rotas do aplicativo.
- **Context API**: Para gerenciamento de estado global, incluindo o estado dos livros doados.
- **CSS Modules**: Para escopo local de estilos CSS.
- **LocalStorage**: Para persistir os livros doados no navegador.
- **Vite**: Ferramenta de build e desenvolvimento rápido para React.

## Instalação

1.  Clone este repositório:

    `git clone https://github.com/usuario/repo.git`

2.  Navegue até o diretório do projeto:

    `cd repo`

3.  Instale as dependências:

    `npm install`

4.  Inicie o servidor de desenvolvimento:

    `npm run dev`

5.  Acesse o projeto no navegador em http://localhost:5173/

## Como Usar

1.  **Adicionar livro**:

    - Acesse a página **"Quero Doar"** e preencha o formulário com as informações do livro.
    - O livro será adicionado à lista de livros doados e persistido no LocalStorage.

2.  **Visualizar livros doados**:

    - Acesse a página **"Livros Doados"** para ver todos os livros doados.
    - Os livros serão exibidos com o título e a imagem de capa.
