var express = require('express');
var mongohelper = require('./mongohelper');
var app = express();

app.get('/', function (req, res) {
    //console.log(req);
    res.send('Home!');
});

app.get('/menu', function (req, res) {
    mongohelper.getAllFromTable('MenuItems', req, res);
});

app.get('/menu/:category', function (req, res) {
    console.log(req.params);
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('MenuItems');
        
        collection.find({ 'Category' : req.params.category }).toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            console.log('Found: ', result.length);
            res.send(result);
          } else {
            console.log('No document(s) found with defined "find" criteria!');
            res.send("no results found");
          }
          
          //Close connection
          db.close();
        });
    });
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
