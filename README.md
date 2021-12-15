
<br>

<h1 align="center">
  <img src="./assets/logo_animado_ofic.gif" width="600">
<p align="center"><p>
</h1>


> Iniciativa para reaproveitamento de medicamentos em São Paulo - SP

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
- [Instruções para Instalação](instruções-para-instalação)
- [Portas](#portas)
- [Rotas](#rotas)
- [Dados](#dados)
- [Aprendizados](#aprendizados)
- [Melhorias Futuras](#melhorias-futuras)
- [Referências](#referências)
- [Agradecimentos](#agradecimentos)
- [Autora](#autora)
<br>

## **Origem**  

<p align="justify">Em meio a Pandemia da Covid-19, tive a infelicidade de ver a vida da minha mãe ceifada por essa doença tão avassaladora, uma experiência amarga e dolorosa. 

<p align="justify">No processo de organização das coisas que ela havia deixado, encontrei uma quantidade significativa de medicamentos para doenças como diabetes e hipertensão, todos ainda dentro do prazo de validade. Olhei aquele montante e me indaguei sobre como poderia haver no mundo outras situações semelhantes a essa. Tão logo, procurei descobrir alguém que fizesse o uso destas mesmas medicações e fiz uma doação, mas isso que levou alguns bons dias para acontecer.

<p align="justify">Passado alguns meses até aqui, lembrei-me desse momento de reflexão e decidi criar a API Farma Bem a fim de intermediar as doações de medicamentos de quem pode doar para quem necessita, de forma gratuita.
<br>

## **Objetivo**

<p align="justify">Este projeto é uma API RESTFull fundamentada no CRUD, integrado com o banco de dados, sendo possível listar, cadastrar, atualizar e deletar cadastros de farmácias, medicamentos e administradores. 

que permite o cadastro das farmácias interessadas em fazer parte desta iniciativa para receber as doações de medicamentos, realizar uma perícia quanto a qualidade e disponibilizá-los a população.

<p align="justify">Realizar também o cadastro dos medicamentos recebidos e demonstrar sua disponibilidade em estoque na unidade correspondente, desta forma será possível uma consulta prévia pelo beneficiário antes mesmo de sair de casa. 

<p align="justify">


- Intermedio entre quem pode doar medicamentos a quem necessita;
- Reduzir as despesas com a compra de medicamentos;
- Reaproveitamento dos medicamentos reduzindo o impacto ambiental e com descarte irregular;

API foi desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).
  
<br>

## **Link**
FALTA COLOCAR O LINK
- [Apresentação](colocar link aqui)

<br>

## **Funcionalidades**

- Cadastro das farmácias, medicamentos e administradores;
- Informe da localidade e contado das farmácias e disponibilidade dos medicamentos;

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
Arquitetura padrão da API Farma Bem:
```
 📁 FARMABEM
   |
   |-  📁 __test__
   |    |- 📑 pharmacy.test.js
   |
   |-  📁 assets
   |    |- 📑 logo_animado_ofic.gif
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
   |    |- 📁 helpers
   |         |- 📑 auth.js
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 admSchema.js
   |         |- 📑 medicineSchema.js
   |         |- 📑 pharmacySchema.js
   |
   |    |- 📁 routes
   |         |- 📑 amdRoutes.js 
   |         |- 📑 index.js
   |         |- 📑 medicineRoutes.js
   |         |- 📑 pharmacyRoutes.js
   |
   |    |- 📑 app.js
   
   |   |
   |-  📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js

```
<br>

# **Instruções para Instalação**

Siga o passo a passo conforme abaixo:


- No terminal Git Bash Here, faça o clone da API Farma Bem:

      git clone https://github.com/xeniabarreto/FarmaBem.git

- Se desejar criar modificações no código, crie uma nova branch, senão pule esta etapa:

      git checkout -b nome-da-sua-branch

- Entre na pasta da API Farma Bem:

      cd FarmaBem

- Após entrar na pasta da API FarmaBem, instale todas as dependências: 

      npm install ou npm i

- Finalizado este processo, você estará apto a executar nossa API Farma Bem, utilize o último comando para finalizar:

      npm start

Aos que fizeram implementações para esta API, por gentileza, realize o push e envie uma solicitação de pull request. 

Se você deseja mais informações sobre os comandos no Git Bash, temos uma pronta referência <a href="https://gist.github.com/xeniabarreto/93e05f03d5545ebd61984b11ad079d62">aqui</a>.



<br>

# **Portas**

### Opções de Portas

* Local: http://localhost:8888 - (rodando localmente)

* Heroku: http://farma-bem.herokuapp.com/ - (consumir API)

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para chamar e testar os endpoints da API localmente ou via Heroku.

<br>

# **Rotas**

### Retorna teste com apresentação 

| Método HTTP  | Tipo Rota | Endpoint                     | Descrição                            |
| ------------ | --------- | ---------------------------- | ------------------------------------ |
| GET          | Pública   | `http://localhost:8888/`     |  Mensagem de apresentação (Index)    |             

<br>

### Manipulação das Rotas das Farmácias:

| Método HTTP  | Tipo Rota | Endpoint                | Descrição                                            |
| ------------ | --------- | ----------------------- | -----------------------------------------------------|
| GET          | Pública   | `/pharmacy/all`         | Retorna todos as farmácias                           |
| GET          | Pública   | `/pharmacy/find_name`   | Retorna uma farmácia específica por nome             |
| GET          | Pública   | `/pharmacy/search`      | Retorna farmácias por filtros múltiplos              |
| GET          | Pública   | `/pharmacy/find/:id`    | Retorna uma farmácia específica por id               |
| POST         | Pública   | `/pharmacy/create`      | Cadastra uma nova farmácia                           |
| PUT          | Pública   | `/pharmacy/update/:id`  | Altera informações de uma farmácia específica por id |
| DELET        | Pública   | `/pharmacy/delete/:id`  | Remove uma farmácia específica por id                |

<br>

### Manipulação das Rotas dos Medicamentos:

| Método HTTP  | Tipo Rota | Endpoint               | Descrição                                           |
| ------------ | --------- | ---------------------- | ----------------------------------------------------|
| GET          | Pública   | `/medicine/all`        | Retorna todos os medicamentos                       |
| GET          | Pública   | `/medicine/filter`     | Retorna medicamentos através de filtros múltiplos   |
| GET          | Pública   | `/medicine/id/:id`     | Retorna um medicamento específico por id            |
| POST         | Pública   | `/medicine/create`     | Cadastra um novo medicamento                        |
| PUT          | Pública   | `/medicine/update/:id` | Altera informações um medicamento específico por id |
| DELET        | Pública   | `/medicine/delete/:id` | Remove um medicamento específico por id             |

<br>

### Manipulação das Rotas dos Administradores:

| Método HTTP  | Tipo Rota | Endpoint          | Descrição                                                |
| ------------ | --------- | ----------------- | ---------------------------------------------------------|
| GET          | Privada   | `/adm/all`        | Retorna todos os administradores                         |
| GET          | Pública   | `/adm/id/:id`     | Retorna um administrador específico por id               |
| POST         | Pública   | `/adm/register`   | Cadastra um novo administrador                           |
| POST         | Pública   | `/adm/login`      | Retorna o login de um administrador                      |
| PUT          | Pública   | `/adm/update/:id` | Altera informações de um administrador específico por id |
| DELET        | Pública   | `/adm/delete/:id` | Remove um medicamento específico por id                  |

<br>

## **Dados**
<br>

### Dados para Collection Autores

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
Desenvolver uma interface que permita transmitir informações aos usuários sobre manipulação, conservação e descarte adequado de medicamentos.

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



## Autora

<br>


<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/xeniabarreto" width="200px;" alt=""/> </td><br> 

<br>

Criado por **Xênia Barreto**.
<br>



  <div>
    <a href="https://www.linkedin.com/in/xênia-barreto-020334209/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
  <a href = "https://github.com/xeniabarreto/"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
   <a href = "mailto:xeniabarreto22@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://instagram.com/xeniabarreto" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 </div>
  

<br>

#### [Início](#sumário) 

<br>
