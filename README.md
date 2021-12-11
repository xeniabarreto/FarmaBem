

<h1 align="center">
  <img src="./assets/logo_animado.gif" width="600">
<p align="center"><br>Farma Bem<p>
</h1>


> Iniciativa de doações de medicamentos em São Paulo (SP).

> Status: **Concluído** ✅

<p align="center">
  <a>
    <a href="https://pretitudes-project-reprograma.herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/deploy-heroku.com-blueviolet">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Database MongoDB" src="https://img.shields.io/badge/database-mongodb.com-green">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/node-v12.18.3-blue">
    <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/priscilaestevao/pretitudes-project-reprograma">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/xeniabarreto/FarmaBem">
    <img alt="GitHub License" src="https://img.shields.io/github/license/priscilaestevao/pretitudes-project-reprograma?logo=mit">
  </a>
</p>
<br>

<br>


## **Sumário**

- [Origem](##origem)
- [Objetivo](#objetivo)
- [Link Apresentação](#link)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pacotes Utilizados](#pacotes-utilizados)
- [Arquiretura MVC](#arquitetura-mvc)
- [Rotas](#rotas)
- [Dados](#dados)
- [Aprendizados](#aprendizados)
- [Melhorias Futuras](#melhorias-futuras)
- [Referências](#referências)
- [Agradecimentos](#agradecimentos)
- [Licença](#licença)
- [Autora](#autora)


<br>

<br>







## Origem 


💻
<br>


<p align="justify">(SEMPRE ABRIR ISSO DAQUI PARA UM PARAGRAFO NOVO).


<br><br>

## Objetivo

<br>

<p align="justify">O projeto é uma API REST que permite o cadastro das farmácias interessadas em fazer parte desta iniciativa, assim como permitirá aos beneficiários, realizar consulta de disponibilidade de medicamentos e unidade correspondente.

<p align="justify">A interface é um CRUD completo, integrado com o banco de dados, onde é possível listar, cadastrar, atualizar e deletar cadastros de farmácias, medicamentos e administradores. 

API foi desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).
  
<br>

## Link 

- [Apresentação](https://www.canva.com/design/DAEjjh5kMho/o-lpglTMDauF-CRLx2e6Dw/view?utm_content=DAEjjh5kMho&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu) - (LINK DO CANVA AQUI)

<br>

## Funcionalidades

- Cadastro dos autores e seus livros para maior visibilidade;
- Disponibilidade dos livros gratuitamente para acesso dos usuários;
- Avaliação dos livros através de like ou dislike e comentários dos usuários;
- Simplificar a vida dos escritores independentes e dos usuários;

<br>

## Aprendizados 


O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>
<br>

## Tecnologias Utilizadas

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [Heroku](https://dashboard.heroku.com/apps)  
<br>

## Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>
<br>

## Arquitetura MVC 

```
 📁 FARMABEM
   |
   |-  📁 assets
   |    |- 📑 logo_animado.gif
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 admController.js
   |         |- 📑 medicineController.js
   |         |- 📑 pharmacyController.js 
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 admSchema.js
   |         |- 📑 medicineSchema.js
   |         |- 📑 pharmacySchema.js
   |
   |    |- 📁 routes
   |         |- 📑 amdRoutes.js 
   |         |- 📑 medicineRoutes.js
   |         |- 📑 pharmacyRoutes.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json <=============VERIFICAR ISSO DAQUI
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE <==============VERIFICAR ISSO DAQUI
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>

# Rotas
<br>

### 🔃 Portas

* Local: http://localhost:8888 - (rodando localmente)

* Heroku: http://farma-bem.herokuapp.com/ - (consumir API)

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku.

<br>

### 🔃 Retorna a documentação no swagger 
    
Swagger - Heroku: https://estante-de-historias.herokuapp.com/api-docs/

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:8888/api-docs`    |  documentação  swagger               |        

<br>

### 🔃 Retorna teste com apresentação 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8888/`     |  Mensagem de apresentação (Index)    |             |

<br>

### 🔃 Manipulação das Rotas de Autores:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/autores`              | Retorna todos os autores             |
| GET          | `/nome`                 | Retorna autor específico por nome    |
| GET          | `/autores/:id`          | Retorna autor específico por id      |
| POST         | `/autores/cadastrar`    | Cria/cadastra um novo autor          |
| PUT          | `/autores/:id`          | Altera informações de um autor       |
| DELET        | `/autores/:id`          | Remove um autor específico           |

<br>

### 🔃 Manipulação das Rotas de Comentarios:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/comentario`         | Retorna todos os comentários               |
| GET          | `/comentario/:id`     | Retorna um comentário específico por id    |
| POST         | `/comentario/criar`   | Cria um novo comentário                    |
| PUT          | `/comentario/:id`     | Altera informações de um comentário        |
| DELET        | `/comentario/:id`     | Remove um comentário  específico           |

<br>

### 🔃 Manipulação das Rotas de Livros:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/livros`              | Retorna todos os livros cadastrados               |
| GET          | `/livros/genero`       | Retorna um livro específico gênero                |
| GET          | `/livros/:id`          | Retorna um livro específico por id                |
| POST         | `/livros/cadastrar`    | Cria/cadastra um novo livro                       |
| PUT          | `/livros/:id`          | Altera informações de um livro                    |
| PATCH        | `/livros/:id`          | atualiza informações por parte                    |
| DELET        | `/livros/:id`          | Remove um livro específico                        |
| POST         | `/livros/:id/like`     |  Dar um like em um livro                          |
| POST         | `/livros/:id/dislike`  |  Dar um dislike em um livro                       |

<br>

## Dados
<br>

### ✅ Dados para Collection Autores

- id: autogerado e obrigatório
- nome: texto e obrigatório
- biografia: texto e obrigatório 
- email: texto e obrigatório 
- criadoEm: data gerada automaticamente e obrigatório

<br>

### ✅ API deve retornar seguinte JSON:

```jsx

{
    "message": "Autor cadastrado com sucesso!",
    "autor": {
        "_id": "60df0799f34e3c6ebca1dce0",
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
        "__v": 0
    }
}

```
 <br>

 ### ✅ Dados para Collection Livros

- id: autogerado e obrigatório
- like: opcional
- titulo: texto e obrigatório
- sinopse: texto e obrigatório
- autor: referência do autor cadastrado previamente obrigatório
- genero: texto e obrigatório
- paginas: número e obrigatório
- idioma: texto e obrigatório
- exibição: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>

### ✅ API deve retornar seguinte JSON:

```jsx
{
    "likes": 1,
    "criadoEm": "2021-07-02T12:43:39.099Z",
    "_id": "60df0a0382bb996448b380c0",
    "titulo": "O casamento",
    "sinopse": "PARA OS NOIVOS É O DIA MAIS IMPORTANTE DE SUAS VIDAS Meses atrás, os amigos diriam que o namoro de Plínio e Diana tinha prazo de validade. Eles se conheceram de um jeito bizarro, pensam completamente diferente e nenhuma das famílias aprova o relacionamento. Mas eles resistiram a tudo. E agora vão se casar. PARA O DETETIVE É A MELHOR CHANCE DE PEGAR UM CRIMINOSO O mais ntegro dos convidados esconde um segredo devastador. Mas alguém sabe e está disposto a espremê-lo com chantagens.Enquanto a plateia espera ansiosa em frente ao altar, algo brutal acontece na antessala. Só quando veem as paredes lavadas com sangue é que os convidados se rendem ao desespero. Começa uma confusão para interromper a marcha nupcial e chamar a polícia. Ninguém sabe o que fazer. E Bardelli, que lidava com um caso de extorsão, descobre que se meteu em algo muito pior. Agora, ele é o único capaz de encontrar respostas. O problema é que as mortes não param de acontecer...",
    "autor": {
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "_id": "60df0799f34e3c6ebca1dce0",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
         "__v": 0
    },
    "genero": "suspense",
    "paginas": 368,
    "idioma": "poetugues",
    "exibicao": "download do livro",
    "__v": 0
}

```

<br>

### ✅ Dados para Collection comentário

- id: autogerado e obrigatório
- comentario: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>

### ✅ API deve retornar seguinte JSON:
   
```jsx

{
    "criadoEm": "2021-07-05T16:34:19.089Z",
    "_id": "60df0bdcf0a295a0f4207f91",
    "comentario": "Nunca tinha lido nada de Victor Bonini e confesso que me surpreendi e muito. História bem traçada e com final que para mim, foi inimaginável.",
    "__v": 0
} 

```
<br>

## Melhorias Futuras

<br>

*  Integrar com o Maps para calcular a distancia da farmácia mais proxima do beneficiário; 
*  Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação;


Toda ideia para melhoria deste projeto serão muito bem-vinda!!!

<br>


##  **Referências**

<h3>



 > <a href="https://www.saude.mg.gov.br/cer/story/9819-descarte-irregular-de-medicamentos-causa-impactos-a-saude-e-ao-meio-ambiente">Dados descarte de medicamentos no meio ambiente</p></a>

 > <a href="http://aquitemremedio.prefeitura.sp.gov.br/#/"><p align="">Aqui tem remédio</p></a>

 

</h3>


<br>

<br>

##  **Agradecimentos**

<br>
<p>
 AGRADECER AQUI </p>


<p> linkar o insta de quem nao tem linkedin <a href="https://www.instagram.com/may_desiderio/">POR NOME AQUI</a>, desse jeito.</p>

<p> Ao <a href="https://www.linkedin.com/company/reprogramabr/">{Reprograma}</a> colocar <a href="https://www.linkedin.com/in/amanda-santos-b50200165/">Amanda Leal</a> e <a href="https://www.linkedin.com/in/leticiardesiderio/">Letícia Desiderio</a> .

FALTA MAIS GENTE </p>


<br>

<br>

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

<br>



<br>



## 👨‍💻 Autora

<br>


<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/xeniabarreto" width="200px;" alt=""/> </td><br> 


##  **Xênia Barreto**

<br>

 ### [GitHub](https://github.com/xeniabarreto)<br>
 ### [LinkedIn](https://www.linkedin.com/mwlite/in/elisabete-alves-675637135) 



<h1>

<br>

#### [Início](#sumário) 

<br>