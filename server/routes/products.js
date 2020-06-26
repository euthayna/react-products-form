var express = require("express");
var router = express.Router();
const Pg = require("pg").Pool;

var app = express();

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    connection.end();
    process.exit();
});

const connection = new Pg({
  host: "localhost",
  user: "thayna",
  password: "password",
  database: "projects",
  port: 5432
});

connection.connect();

app.get("/", function(request, response) {
  connection.query(
    "SELECT products.*, categories.name as category_name " +
    "FROM products "+
    "LEFT JOIN categories ON products.category_id=categories.id;",
  function(error, rows) {
  if (error) {
    response.status(500).send(error);
  }
    response.status(200).send(rows);
  });
});

app.get("/:id", function(request, response) {
  connection.query(
    "SELECT * FROM products where id = " + parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send("DEU RUIM NO SERVER");
      }
      if (rows.rowCount > 0) {
        response.status(200).send(rows['rows'][0]);
      } else {
        response.status(404).send("Not Found");
      }
    });
});

app.post("/", function(request, response) {
  connection.query(
    "INSERT INTO products (description, category_id) values ('" +
    request.body.description + "', '" + request.body.category_id +
    "');",
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(201).send("");
  });
});

app.put("/:id", function(request, response) {
  connection.query(
    "UPDATE products SET " +
    "description = '" + request.body.description + "', " +
    "category_id = '" + request.body.category_id +
    "' where id = '" + parseInt(request.params.id) + "'",
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    });
  });

app.delete("/:id", function(request, response) {
  connection.query(
    "DELETE from products where id = " + parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    });
  });

module.exports = app;
