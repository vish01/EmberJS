
// modules
var express = require('express');
var app = express();

//set port
var port = process.env.port || 3000;

// Set Static files location
app.use(express.static(__dirname + 'public'));

require('./app/routes')(app); //configure routes

// Start App at localhost:3000
app.listen(port);

//expose app
exports = module.exports = app;