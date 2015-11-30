var express = require('express');
var mongohelper = require('./mongohelper');
var app = express();

app.get('/', function (req, res) {
  res.send('Home!');
});

app.get('/menu', function (req, res) {
    mongohelper.getAllFromTable('MenuItems', req, res);
});

app.get('/orders', function (req, res) {
    mongohelper.getAllFromTable('Orders', req, res);
});

app.get('/stores', function (req, res) {
    mongohelper.getAllFromTable('Stores', req, res);
});

app.get('/subscribers', function (req, res) {
    mongohelper.getAllFromTable('Subscribers', req, res);
});

app.get('/customers', function (req, res) {
    mongohelper.getAllFromTable('Customers', req, res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
