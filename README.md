

<h1 align="center">
  <img src="./assets/logo_animado.gif" width="600">
<p align="center"><p>
</h1>

<br>

> Iniciativa para doações de medicamentos em São Paulo - SP

> Status: **em construção** ✅



<p align="justify">
  <a>
    <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/xeniabarreto/FarmaBem">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/xeniabarreto/FarmaBem">
  </a>
</p>
<br>


## **Sumário**

- [Origem](##origem)
- [Objetivo](#objetivo)
- [Link Apresentação](#link)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Bibliotecas Aplicadas](#bibliotecas-aplicadas)
- [Arquiretura MVC](#arquitetura-mvc)
- [Portas](#portas)
- [Rotas](#rotas)
- [Dados](#dados)
- [Aprendizados](#aprendizados)
- [Melhorias Futuras](#melhorias-futuras)
- [Referências](#referências)
- [Agradecimentos](#agradecimentos)
- [Autora](#autora)


<br>

<br>


## **Origem**  

<br>


<p align="justify">(SEMPRE ABRIR ISSO DAQUI PARA UM PARAGRAFO NOVO).


<br><br>

## **Objetivo**

<br>

<p align="justify">O projeto é uma API RESTFull que permite o cadastro das farmácias interessadas em fazer parte desta iniciativa, assim como permitirá aos beneficiários, realizar consulta de disponibilidade de medicamentos e unidade correspondente.

<p align="justify">A interface é um CRUD completo, integrado com o banco de dados, onde é possível listar, cadastrar, atualizar e deletar cadastros de farmácias, medicamentos e administradores. 

API foi desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).
  
<br>

## **Link**

- [Apresentação](https://www.canva.com/design/DAEjjh5kMho/o-lpglTMDauF-CRLx2e6Dw/view?utm_content=DAEjjh5kMho&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu) - (LINK DO CANVA AQUI)

<br>

## **Funcionalidades**

- Cadastro das farmácias participantes;
- Disponibilidade dos medicamentos;
- Ajudar aos que necessecitam de apoio para aquisição de remédios para pessoas de baixa renda;
- Reduzir o impacto ambiental com descarte incorreto de medicamentos;

<br>


<br>

## **Tecnologias Utilizadas**

Para a construção deste projeto, as seguintes tecnologias foram utilizadas:

<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-pink">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-pink">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-pink">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-pink">
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-pink">
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-pink">
<a  href="https://dashboard.heroku.com/apps"><img  alt="Heroku"  src="https://img.shields.io/badge/Heroku-pink">
<a  href=""><img  alt="Mit"  src="https://img.shields.io/badge/Licence MIT-pink"></a>

<br>
<br>

## **Bibliotecas Aplicadas**
Para a construção deste projeto, as seguintes bibliotecas foram aplicadas:

<p  align="justify">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-pink">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-pink">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-pink">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-pink">
<a  href="https://www.npmjs.com/package/cors"><img  alt="npm version"  src="https://img.shields.io/badge/cors-2.8.5-pink">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-pink">
<a  href="https://www.npmjs.com/package/bcryptjs"><img  alt="Bcrypt version"  src="https://img.shields.io/badge/bcrypt-5.0.0-pink">
<a  href="https://www.npmjs.com/package/jsonwebtoken"><img  alt="Jsonwebtoken version"  src="https://img.shields.io/badge/jsonwebtoken-8.5.1-pink"></a>
</p>


<br>

## **Arquitetura MVC** 

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
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>

# **Portas**
<br>

### 🔃 Portas

* Local: http://localhost:8888 - (rodando localmente)

* Heroku: http://farma-bem.herokuapp.com/ - (consumir API)

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku.

<br>

# **Rotas**

### 🔃 Retorna teste com apresentação 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8888/`     |  Mensagem de apresentação (Index)    |             |

<br>

### 🔃 Manipulação das Rotas das Farmácias:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/pharmacy/all`         | Retorna todos as farmácias           |
| GET          | `/pharmacy/:id`         | Retorna farmácia específico por id      |
| POST         | `/pharmacy/create`      | Cria/cadastra um novo farmácia          |
| PUT          | `/pharmacy/:id`         | Altera informações de um farmácia       |
| DELET        | `/pharmacy/:id`         | Remove um farmácia específico           |

<br>

### 🔃 Manipulação das Rotas dos Medicamentos:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/medicine/all`       | Retorna todos os medicamentos              |
| GET          | `/medicine/:id`       | Retorna um medicamento específico por id   |
| POST         | `/medicine/create`    | Cria um novo medicamento                   |
| PUT          | `/medicine/:id`       | Altera informações de um comentário        |
| DELET        | `/medicine/:id`       | Remove um medicamento específico           |

<br>

### 🔃 Manipulação das Rotas de Administradores:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/adm/all`             | Retorna todos os livros cadastrados               |
| POST         | `/adm/creat`           | Cria/cadastra um novo livro                       |
| PUT          | `/adm/:id`             | Altera informações de um livro                    |
| DELET        | `/adm/:id`             | Remove um livro específico                        |

<br>

## **Dados**
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
    "farmácia": {
        "_id": "60df0799f34e3c6ebca1dce0",
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
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
- farmácia: referência do farmácia cadastrado previamente obrigatório
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
    "sinopse": "PARA OS NOIVOS É O DIA MAIS IMPORTANTE DE SUAS VIDAS Meses pior. Agora, ele é o único capaz de encontrar respostas. O problema é que as mortes não param de acontecer...",
    "farmácia": {
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "_id": "60df0799f34e3c6ebca1dce0",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou  desenvolver suas próprias histórias.",
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

## **Melhorias Futuras**

<br>

*  Integrar com o Maps para calcular a distancia da farmácia mais proxima do beneficiário; 
*  Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação;

<br>

Obs.: Toda sugestão de melhoria deste projeto será muito bem-vinda!!!

<br>

## **Aprendizados**
<br>
<p> A construção deste projeto consiste em uma API RESTFull fundamentada no CRUD com a integração do banco de dados NoSQL. 
<br>
<br>

- Definição CRUD: 
    

      CREATE (CRIAR)
      READ (LER, CONSULTAR)
      UPDATE (ATUALIZAR) 
      DELETE (DESTRUIÇÃO, REMOÇÃO)

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



## 👨‍💻 Autora

<br>


<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/xeniabarreto" width="200px;" alt=""/> </td><br> 

<br>

Criado por **Xênia Barreto**.
<br>
<br>

[![Linkedin Badge](https://img.shields.io/badge/-Xênia%20Barreto-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/xeniabarreto/)


[![GitHub Badge](https://img.shields.io/badge/-Xênia%20Barreto-black?style=flat-square&logo=Github&logoColor=white)](https://github.com/xeniabarreto/)

[![Instagram Badge](https://img.shields.io/badge/-Xênia%20Barreto-purple?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/xeniabarreto/)



<h1>

<br>

#### [Início](#sumário) 

<br>