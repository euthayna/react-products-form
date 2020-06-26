var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

var app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var index = require("./routes/index");
var products = require("./routes/products");
var categories = require("./routes/categories")

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use("/", cors(), index);
app.use("/products", cors(), products);
app.use("/categories", cors(), categories);
var server = app.listen(5000, 'localhost', function() {
	var host = server.address().address
  var port = server.address().port
	console.log('Servidor rodando! Acesse: http://%s:%s', host, port);
});
