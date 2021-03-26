<h1 align="center">VUTTR</h1>

<p align="center">Very Usefull Tools to Remember</p>

<br />
<br />


<h2>Sobre</h2>
<p>
  A aplicação é um repositório para você armanezar suas ferramentas preferidas e não se preocupar em esquecer delas, você pode adicionar links, descrição e até separa-las por tag.   
</p>
<p>
   Durante o desenvolvimento da API foram utilizadas ferramentas como Eslint e prettier para a padronização do código, dotenv para configuração das variaveis de ambiente e conceitos do SOLID, arquitetura usando a metodologia DDD (Domain Driven Design) que contribue para uma melhor escalabilidade da aplicação.
</p>


<br />
<br />


## :bulb: Principais tecnologias utilizadas
 
 * Node.js
 * Express
 * TypeScript
 * TypeORM
 * PostgreSQL
 * Docker

<br />


## 🏁 Rotas da aplicação

* ```GET /```  - Rota principal para testar o funcionamento da api exibindo um Hello World.

* ```GET /tools```  - Lista todas as ferramentas cadastradas

  * ```GET /tools?tag={tag}```  - Lista todas as ferramentas cadastradas filtrando pela tag desejada.

  * ```GET /tools?title={title}```  - Busca todas as ferramentas com base no título desejado. 

* ```POST /tools```  - Cadastra uma nova ferramenta.

* ```PUT /tools```  - Atualiza as informações de uma ferramenta, para isso você precisa enviar o ```id``` da ferramenta e os dados que deseja atualizar no corpo da requisição.

* ```DELETE /tools/:id```  - Deleta uma ferramenta, com seu ```id``` fornecido no parâmetro de rota.

<br>
<br>

<h3>Documentação</h3>
  
Você conferir a documentação feita com api-blueprint, [aqui](api.md).

<br />
<br />


<h2>Configurações essenciais para rodar o projeto</h2>
<h3>Clone o repositório</h3>

```sh
  git clone https://github.com/ebertmota/vuttr_api.git
```
Agora é só você entrar na pasta do projeto e baixar as dependências.
 
```sh
  cd vuttr_api
```


```sh
  yarn 
 ```
 
 ou

```sh
  npm install
  
  ```
<br />
<br />
  
<h3>Configurando conexão com Banco de dados</h3>
<br />
  Primeiramente você vai precisar de um banco PostgreSQL rodando em sua máquina para o funcionamento da API, o recomendado é utilizar o docker, caso não saiba configura-lo siga as instruções na <a href="https://docs.docker.com/engine/examples/postgresql_service/">documentação oficial</a>.
 <br />
 
 Agora crie um arquivo na raiz do seu seu projeto ```.env```, então copie o conteúdo do arquivo ```.env.example``` e cole no .env que você acabou de criar.
E preencha o arquivo com as suas informações de conexão do banco de dados. Exemplo:

  ```bash
  DB_HOST="localhost"
  DB_PORT=5432
  DB_USERNAME="username"
  DB_PASSWORD="password"
  ```

<br />
<br />

<h3>Criando a database e rodando as migrations.</h3>
Precisamos criar um nova database no postgres, para facilitar esse processo você pode usar clientes como <a href="https://www.electronjs.org/apps/postbird">PostBird</a> e  <a href="https://dbeaver.io/">dbeaver</a> e criar um banco chamado "ebertmota_vuttr". 

<br />
<br />

Para finalizar vamos rodar as migrations com o comando:
   ```
      yarn typeorm migration:run
   ```

<br />
<br />


Agora você pode rodar o projeto:
  ```bash
  yarn dev:server
  ```
E a aplicação estará funcionando em: http://localhost:3000
<br />

<quote> Se você usa o insomnia, faça o <a href="https://github.com/ebertmota/vuttr_api/blob/main/.github/assets/Insomnia_vuttr_api.json">donwload do workspace</a> para testar as rotas do projeto.</quote>
