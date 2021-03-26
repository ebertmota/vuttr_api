README em desenvolvimento...


<h1 align="center">VUTTR</h1>

Vuttr is a simple API allowing consumers to store your most used tools to make sure that you will remember them.

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


<h3>Configurações essenciais para rodar o projeto</h3>
 clone o repositório

```sh
  git clone https://github.com/ebertmota/vuttr_api.git
```
Agora é só você entrar na pasta do projeto e baixar as dependências.
 
```sh
  cd flukeChallenge
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
  Primeiramente você vai precisar de um Banco PostgreSQL rodando em sua máquina para o funcionamento da API, o recomendado é utilizar o docker caso não saiba usar o docker confira as instruções na <a href="https://docs.docker.com/engine/examples/postgresql_service/">documentação oficial</a>.
 
 Agora crie um arquivo na raiz do seu seu projeto ```.env```, então copie o conteúdo do arquivo ```.env.example``` e cole no .env que você acabou de criar.
 Agora é so preencher o arquivo com as informações de conexão do banco de dados. Exemplo:
 ```
DB_HOST="localhost"
DB_PORT=5432
DB_USERNAME="username"
DB_PASSWORD="password"

 ```
