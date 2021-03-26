README em desenvolvimento...


<h1 align="center">VUTTR</h1>

<p align="center">Vuttr is a simple API allowing consumers to store your most used tools to make sure that you will remember them.</p>

<br />
<br />


## :bulb: Tecnologias utilizadas
 
 * Node.js
 * Express
 * TypeScript
 * TypeORM
 * PostgreSQL
 * API Blueprint

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


<quote> Se você usa o insomnia, faça o <a href="https://github.com/ebertmota/vuttr_api/blob/main/.github/assets/Insomnia_vuttr_api.json">donwload do workspace</a> para testar as rotas do projeto.</quote>
