var express = require('express');
var mongohelper = require('./mongohelper');
var app = express();

app.get('/', function (req, res) {
    //console.log(req);
    res.send('Home!');
});

app.get('/menu', function (req, res) {
    mongohelper.getFromTable(req, res, 'MenuItems');
});

app.get('/menu/:category', function (req, res) {
    console.log(req.params);
    mongohelper.getFromTable(req, res, 'MenuItems', { 'Category' : req.params.category });
});

app.get('/orders', function (req, res) {
    mongohelper.getFromTable(req, res, 'Orders');
});

app.get('/stores', function (req, res) {
    mongohelper.getFromTable(req, res, 'Stores');
});

app.get('/subscribers', function (req, res) {
    mongohelper.getFromTable(req, res, 'Subscribers');
});

app.get('/customers', function (req, res) {
    mongohelper.getFromTable(req, res, 'Customers');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
