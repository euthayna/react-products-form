# Formulário de Produtos

 Esse projetinho consiste em dois formulários, um de categorias e outro de produtos. No formulário de produtos é obrigatório escolher uma categoria através de um campo de seleção.

 A aplicação é formada por um front em react e uma api em node.

### Banco de Dados

Criar no seu banco de dados as tabelas que estão no arquivo `server/SQL`

O meu sql foi feito para o postgres, você deve ajustar o sql caso seu BD seja outro.

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
 Acesse localhost:3000 no navegador. A listagem de produtos estará disponivel em localhost:3000.

### Navegador
**localhost:3000/categories/novo**

Crie uma Categoria :
<p align="center">
  <img width="460" height="300" src="https://github.com/euthayna/react-products-form/blob/master/images/new-category.png">
</p>

**localhost:3000/categories/**

Listagem de Categorias (as categorias que estão sendo usadas em algum produto não podem ser excluidas)
<p align="center">
  <img width="460" height="300" src="https://github.com/euthayna/react-products-form/blob/master/images/categories-list.png">
</p>

**localhost:3000/produtos/novo**

Criar Produto:
<p align="center">
  <img width="460" height="300" src="https://github.com/euthayna/react-products-form/blob/master/images/new-product.png">
</p>

**localhost:3000/**

Listagem de Produtos
<p align="center">
  <img width="460" height="300" src="https://github.com/euthayna/react-products-form/blob/master/images/products-list.png">
</p>
