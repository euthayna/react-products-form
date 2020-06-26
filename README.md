# Formulário de products

 Esse projetinho consiste em dois formulários, um de categorias e outro de products. No formulário de products é possivel escolher uma categoria através de um campo de seleção.

 A aplicação é formada por um front feito com react e uma api em node.

### Banco de Dados

Passo a passo para rodar a aplicação:

Criar no seu banco de dados as tabelas que estão no arquivo `server/SQL`
No meu caso eu criei no postgres.

### Server (Na pasta do server)

Instala as dependencias
```
  npm install
 ```
Abra routes/categorias.js e routes/products.js e configure as suas credenciais para o seu banco de dados.

Subir o servidor do server:
```
node server.js
```

### Frontend (na pasta do frontend)
Para instalar as dependências:
```
npm install
```
Para levantar o servidor da nossa aplicação frontend:
```
  SKIP_PREFLIGHT_CHECK=true npm start
```
 Acesse localhost:3000 no navegador.
