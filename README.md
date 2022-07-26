
Projeto Final Todas Em Tech - Back-End / 2022

<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
    <p align="center">
    <img src="imagens\idosos.jpg" width="350" height="300"/>
    </p>
    <p align="center">Cuida de Mim<p>
    <p align="center">"Adoção" de idosos em lares de acolhimento<p>
</h1>

<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com a ajuda sagrada da Professora Hannah Freitas para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Desde de pequena sempre fui ensinada a ver os outros não só com os olhos do rosto mas também com os olhos do coração. E assim comecei a observar que as pessoas tem diferentes necessidades e algumas nós podemos ajudar. É só dar um passo.
    
<p align="justify">O Brasil é um país em processo de envelhecimento . Nosso maior contingente ainda é de jovens, mas conforme projeções do IBGE, em 2030 isso começará a mudar - o número de pessoas com mais de 60 anos será maior do que a da população com até 14 anos.

<p align="justify">Aqui a velhice é sinal de decadência e incapacidade e as pessoas com mais idade sofrem preconceitos e são desrespeitadas diariamente. Muitos sofrem violência e maus tratos da própria família.
   
<p align="justify">Ocorre que a população brasileira está envelhecendo muito depressa e isso tem um custo e o país não está preparado, não temos políticas públicas adequadas para essa população específica. Portanto, envelhecer no Brasil torna-se um desafio.

<p align="justify">Esse projeto nasceu justamente para poder ajudar pessoas idosas que estão em situação de vulnerabilidade, precisando dessa ajuda e facilitar o acesso das pessoas "voluntárias" que estão dispostas a ajudar e não sabem como, fazendo essa ponte entre eles. 

<br><br>

## 🚀 Descrição da API Cuida de Mim

<br>

<p align="justify">O Projeto é uma API Rest que permite que os idosos em situação de vulnerabilidade, possam ser cadastrados, informando os seus dados e suas necessidades para que as pessoas "voluntárias" que estejam dispostas a ajudar possam fazer uma busca. Os "voluntários" também irão se cadastrar, informando os seus dados e como pretendem ajudar. Ambos terão login e senha.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os idosos e os "voluntários", cadastrar novos idosos e/ou "voluntários", atualizar os dados e deletar o cadastro do idoso e/ou "voluntário". Tudo isso passando por uma autenticação, gerando um token que permite ou não o acesso as pessoas que estarão no sistema.
  
<br>

## 🔗 Link 

- [Apresentação](https://docs.google.com/presentation/d/19Zv5lzDjhMUuljqReGV6RGPl6iueDuJWIs_zAJB6mn8/edit?usp=sharing)

<br>
    
## ⚙️ Funcionalidades/Objetivos

- Listar todas as pessoas que estão cadastradas no sistema;
- Cadastrar os idosos que estão em situação de vulnerabilidade;
- Cadastrar os voluntários “adotantes” que possam oferecer ajuda;
- Atualizar os dados tanto do idoso quanto do "voluntário", caso haja alguma mudança;
- Deletar o idoso e/ou voluntário, caso não seja mais necessário;
- Efetuar login por CPF e senha;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)

<br>

## 📁 Arquitetura MVC 

```
 📁 cuida-de-mim   
   📦src
 ┣ 📂controller
 ┃ ┣ 📜authIdosoController.js
 ┃ ┣ 📜authVoluntarioController.js
 ┃ ┣ 📜idosoController.js
 ┃ ┗ 📜voluntarioController.js
 ┣ 📂database
 ┃ ┗ 📜mongoConfig.js
 ┣ 📂helpers
 ┃ ┗ 📜hashPassword.js
 ┣ 📂middlewares
 ┃ ┗ 📜autenticacaoUsuario.js
 ┣ 📂models
 ┃ ┣ 📜idosoSchema.js
 ┃ ┗ 📜voluntarioSchema.js
 ┣ 📂routes
 ┃ ┣ 📜idosoRoutes.js
 ┃ ┣ 📜indexRoutes.js
 ┃ ┗ 📜voluntarioRoutes.js
 ┗ 📜app.js
 ┣ 📜.env
 ┣ 📜.env.example
 ┣ 📜.gitignore
 ┣ 📜ibge.png
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜Procfile
 ┣ 📜README.md
 ┗ 📜server.js
```
<br>
    
## 🚧 Instruções para utilização da API

<br>
<p align="justify">Você vai precisar ter instalado em sua máquina as seguintes ferramentas: 

*  Git,
*  Node.js
*  Uma IDE, eu usei o VScode.

## ⚙️ Rodando o Back-End

* Clone este repositório
* Acesse a pasta no projeto pelo terminal
* Instale as dependencias
    - npm install
    - mongoose
    - cors
    - express
    - nodemon
    - dotenv-safe
    - bcrypt
    - jwt
    - swwage
    
<p align="justify">Verifique se todas as dependências do package.json foram instaladas 
    
*  Execute o servidor: npm start
<br>
## 🔃 Rotas

* local: http://localhost:9090

* Heroku: https://cuidademim.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna a documentação no swagger: 
    
Swagger - Heroku: 

| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:9090/doc/#`       |  documentação  swagger               |        

<br>

## 🔃 Manipulação das Rotas dos idosos:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/idoso/listar`         | Retorna todos os idosos              |
| GET          | `/idoso/listar/:id`     | Retorna idoso por Id                 |
| POST         | `/idoso/cadastrar`      | Cria/cadastra um novo idoso          |
| POST         | `/login/loginIdoso`     | Faz o login do Idoso                 |
| PUT          | `/idoso/atualizar/:id`  | Altera informações do idoso          |
| DELETE       | `/idoso/deletar/:id`    | Deleta um idoso específico           |

<br>

## 🔃 Manipulação das Rotas dos voluntários:

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | -----------------------------| ------------------------------------ |
| GET          | `/voluntario/listar`         | Retorna todos os voluntários         |
| GET          | `/voluntario/listar/:id`     | Retorna voluntário por Id            |
| POST         | `/voluntario/cadastrar`      | Cria/cadastra um novo voluntário     |
| POST         | `/voluntario/loginvoluntario`| Faz o login do voluntário            |
| PUT          | `/voluntario/atualizar/:id`  | Altera informações do voluntario     |
| DELETE       | `/voluntario/deletar/:id`    | Deleta um voluntario específico      |

<br>



## ✅ Dados para Collection Idoso:

- id: gerado automaticamente 
- nome: texto e obrigatório 
- endereco: texto e obrigatório
- dataNscimento: date e obrigatório 
- cpf: número, obrigatório e único
- genero: texto e obrigatório 
- password: texto e obrigatório
- situacao: texto  
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
     "_id": "62cf7c1dc957931b09c70e98",
            "nome": "Joaquim Gusmao",
            "endereco": "Rua Maria Estela, 125",
            "dataNascimento": "1948-10-25T03:00:00.000Z",
            "cpf": "258.784.589-58",
            "genero": "Masculino",
            "situacao": "Está morando em uma casa de repouso e a família não o visita mais. Precisa de um amigo para conversar",
            "createdAt": "2022-07-14T02:14:54.089Z",
            "updatedAt": "2022-07-14T02:14:54.089Z",
            "__v": 0
}
```
 <br>

 ## ✅ Dados para Collection Voluntário:

- id: gerado automaticamente 
- nome: texto e obrigatório
- email: texto e obrigatório
- endereco: texto e obrigatório
- dataNascimento: date e obrigatório
- cpf: número e obrigatório
- estadoCivil: texto
- genero: texto
- ajudaOferecida: texto
- idoso: id: gerado automaticamente, ref: idoso
- password: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
"_id": "62cf8bea77b3bc7d50b103cd",
            "nome": "Luciana Guimaraes",
            "endereco": "Rua Paes de Barros, 25 apto 22",
            "dataNascimento": "1998-12-15T02:00:00.000Z",
            "cpf": "258.478.784-87",
            "estadoCivil": "Casada",
            "genero": "feminino",
            "ajudaOferecida": "Tem disponibilidade de passar as tarde dando aula de  artesanato",
            "idoso": {
                "_id": "62cf7c1dc957931b09c70e98",
                "nome": "Joaquim Gusmao",
                "endereco": "Rua Maria Estela, 125",
                "dataNascimento": "1948-10-25T03:00:00.000Z",
                "cpf": "258.784.589-58",
                "genero": "Masculino",
                "situacao": "Está morando em uma casa de repouso e a família não o visita mais. Precisa de um amigo para conversar",
                "createdAt": "2022-07-14T02:14:54.089Z",
                "updatedAt": "2022-07-14T02:14:54.089Z",
                "__v": 0
            },
            "createdAt": "2022-07-14T03:22:19.807Z",
            "updatedAt": "2022-07-14T03:22:19.807Z",
            "__v": 0
}
```

<br>

## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/HannahFreitas">
<img style="border-radius: 20%;" src="https://avatars.githubusercontent.com/u/83011638?s=400&u=3bdf6c0c7eb5569487397b8b0a54eecebb9dddfd&v=4" width="200px;" alt=""/> </td><br> 


## [Renata Matsumoto](https://github.com/renata-matsumoto)
## [LinkedIn](https://www.linkedin.com/in/renata-matsumoto/) 

<br>

## 🥰 Agradecimentos:

<p align="justify"> O que não pode faltar em um projeto? Isso mesmo, as considerações finais! Esse ano pra mim foi uma loucura, eu realmente decidi entrar de cabeça no que sempre amei e tocar pra frente meus planos de seguir em uma área que sempre fui fascinada. De imediato, minha noiva, sempre muito prestativa, me apoiou em todas as minhas decisões, mesmo que significasse menos tempo comigo, pois cá estou sempre me matando de estudar. Então primeiramente gostaria de agradecer a ela, por tudo que ela sempre tem feito, por toda a compreensão, por todo auxílio e amor. 

<p align="justify"> Após toda essa minha decisão, conheci a reprograma sem querer, e decidi tentar como quem não quer nada, não muito confiante, pois ainda não acredita ser capaz de ser uma (como diz Andréa), reprogramer. Me inscrevi e minha maior surpresa foi a aprovação no meio de tanta candidatura e no meio de tanta gente boa. Logo de início, quis criar um vínculo forte com a minha turma, pois queria viver a experiência completa de ser uma reprogamer, e assim o fiz, e aqui vem os meus agradecimentos, "SPOILER": A lista vai ser longa! 

- [Amanda Santos](https://www.linkedin.com/in/amandasantos24/)
- [Ana Carolliny](https://www.linkedin.com/in/anacarolliny/)
- [Andrea Carvalho](linkedin.com/in/andrea-carvalho-/)
- [Camila Vicente](https://www.linkedin.com/in/lamivicente/)
- [Clarice Hatischvili](https://www.linkedin.com/in/claricemha/)
- [Daniele Vilares](https://www.linkedin.com/in/daniele-vilares-9ab876223/)
- [Darielly Santos](https://www.linkedin.com/in/darielly-santos/)
- [Deborah Gomes](https://www.linkedin.com/in/deborahgomes123/)
- [Edilaine Silva](https://www.linkedin.com/in/edilaine-silva-a683a1105/)
- [Erika Freitas](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/)
- [Estefanya Alves](https://www.linkedin.com/in/estefanya-alves/)
- [Ester Silva](https://www.linkedin.com/in/ester-silvade/)
- [Ingrydt Alcântara](https://www.linkedin.com/in/ingrydtalc%C3%A2ntara/)
- [Jaciara Feio](https://www.linkedin.com/in/jaciara-feio/)
- [Janaina Lopes](https://www.linkedin.com/in/janainalopes-dev/)
- [Jeniffer Alves](https://www.linkedin.com/in/jeniffer-a-472230107/)
- [Julia Borges](https://www.linkedin.com/in/juliarebeccaborges/)
- [Juliana Santana](https://www.linkedin.com/in/juliana-santana-53a630b9/)
- [Kamila Lima](https://www.linkedin.com/in/kamila-lima-14299b150/)
- [Kelly Vieira](https://www.linkedin.com/in/kelly-vieira/)
- [Letícia Desiderio](https://www.linkedin.com/in/leticiardesiderio/)
- [Mabiá - Priscila Duarte](https://www.linkedin.com/in/prisciladuarte1993/)
- [Rafaela Siglyane](https://www.linkedin.com/in/siglyane/)
- [Raissa Nepomuceno](https://www.linkedin.com/in/ra%C3%ADssa-nepomuceno/)
- [Ravena Maia](https://www.linkedin.com/in/ravena-maia-367a45162/)
- [Samila Rodrigues](https://www.linkedin.com/in/samila-rodrigues/)
- [Samara Silva](https://www.linkedin.com/in/samarac-silva/)
- [Talita Rosa](https://www.linkedin.com/in/talitarosamistica/)
- [Victoria Rezende](https://www.linkedin.com/in/victoriarezende253/)
- [Victoria Paiva](https://www.linkedin.com/in/victoriarsp/)
- [Xênia Barreto](https://www.linkedin.com/in/xeniabarreto/)
- [Yara Viana](https://www.linkedin.com/in/yaralviana/)

**Não encontrei o Linkedin de todas, por isso atualizarei todas no futuro**

<p align="justify"> VOCÊ RECRUTADOR, ISSO MESMO, VOCÊ QUE PODE ESTAR AQUI NO PERFIL, CONTRATA MINHAS MENINAS!!!!!!! 

<p align="justify"> Bem, agradeço quem chegou até aqui, e teve a paciência de ler tudo que escrevi, agora que agradecer as mulheres maravilhosas da minha vida, que me orientaram, que me mostraram o caminho e principalmente que: LUGAR DE MULHER É ONDE ELA QUISER! Obrigada, a todas vocês que fizeram de tudo para nos mostrar como seguir, ser forte, não desistir e o não menos importante, como codar! Aqui vai um pequena lista das minhas deusas possuidora de todo conhecimento: 

- [Raquel Andrade](https://www.linkedin.com/in/raquelbennington/) - A pessoa que realmente facilita minha vida
- [Jéssica Osko](https://www.linkedin.com/in/jessica-osko/) - Essa mulher, é aquela que é literalmente sua sombra, ela sempre está de observando e te ajudando mesmo sem você ter nem ideia
- [Tabita Barbosa](https://www.linkedin.com/in/tabita-barbosa/) - Primeira professora e inesquecível né? Quem esquece o primeiro erro com git? KKKKKKKK
- [Paula Allemand](https://www.linkedin.com/in/paulaallemand/) - Além de me proporcionar um workshop incrível, ainda foi uma professora maravilhosa no dia a dia.
- [Beatriz Ramerindo](https://www.linkedin.com/in/beatriz-ramerindo/) - Achei que depois que tu mostrasse o banco de dados eu iria surtar, mas seguimos aqui no amor intacto.
- [Lilit Bandeira](https://www.linkedin.com/in/lilitbandeira/) - Async e Await até hoje está nos meus pesadelos, mas graças a você fez todo o sentido do mundo!!
- [Tassila Bomfim](https://www.linkedin.com/in/tassilabomfim/) - Primeiro projeto guiado a gente nunca esquece, nem parece que tu tava nervosa, arrasa sempre!
- [Edlaine Pontes](https://www.linkedin.com/in/edlaine-pontes/) - Nos mostrando a base com o seu projeto incrível.
- [Keyla Rosa](https://www.linkedin.com/in/keyla-rosa-34abb190/) - Que nos deu a base de toda uma lógica e foi sensacional.
- [Analu](https://www.linkedin.com/in/sampaioaanaluiza/) - Analu, obrigada pela paciência de ensinar um CRUD do zero, graças a você o CRUD ta ai!

**Sou extremamente grata a vocês e amo cada uma de vocês da minha forma louca, obrigada!**

<p align="justify"> E quero agradecer a todas as monitoras que tiverem presente nessa trajetória pra nos auxiliar, mas quero agradecer a uma em especial, pois sempre se colocou a minha disposição, sempre me ajudou da melhor forma que poderia, eu me guiei pelo projeto dela e além de tudo, é super inteligente, RECRUTADORES, SE ELA NÃO TIVER EMPREGADA OU MESMO SE TIVER, LUTEM POR ELA, ESSA É A OPORTINUDADE DE VOCÊS!!!! Obrigada, Bete, por tudo e pra você, além de link do Linkedin, em especial, dedicarei o meu projeto ao seu, OBRIGADA: 

- [Elisabete Santos](https://www.linkedin.com/in/elisabete-a-santos/)
- [Estante de Histórias](https://github.com/elisabetealves/reprograma-estante-de-historias)
 

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).
