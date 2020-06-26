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

connection.connect(function(err) {
  if (!err)
    console.log("connected");
  else
  console.log(err + "There is problem");
});

app.get("/", function(request, response) {
  connection.query("select distinct on (categories.id) categories.*, products.id is not null as has_product from categories left join products on products.category_id = categories.id;", function(error, rows) {
    if (error) {
      response.status(500).send(error);
    }
    response.status(200).send(rows);
  });
});

app.get("/:id", function(request, response) {
  var sql = "SELECT * FROM categories where id = " + parseInt(request.params.id) + ";";

  connection.query(
    sql,
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      if (rows.rowCount > 0) {
        response.status(200).send(rows['rows'][0]);
      } else {
        response.status(404).send("[]");
      }
    });
  });

app.post("/", function(request, response) {
  const sql = "INSERT INTO categories (name) values ('" +
  request.body.name +
  "');";
  connection.query(
    sql,
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      } else {
      response.status(201).send("salvou");
    }
  });
});

app.put("/:id", function(request, response) {
  connection.query(
    "UPDATE categories set name = '" + request.body.name +
    "' where id = '" + request.params.id +"'",
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    });
  });

app.delete("/:id", function(request, response) {
  connection.query(
    "DELETE from categories where id = " + parseInt(request.params.id),
    function(error, rows) {
      if (error) {
        response.status(500).send(error);
      }
      response.status(204).send("");
    });
  });

module.exports = app;
