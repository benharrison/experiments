var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Home!');
});

app.get('/menu', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('MenuItems');
        
        //collection.find({ SubscriberId : BinData(4, 'c2O0vZnqSGCmqE7kJxQF/w==') }).toArray(function (err, result) {
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            //console.log('Found:', result);
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
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('Orders');
        
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            //console.log('Found:', result);
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

app.get('/stores', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('Stores');
        
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            //console.log('Found:', result);
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

app.get('/subscribers', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('Subscribers');
        
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            //console.log('Found:', result);
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

app.get('/customers', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('Customers');
        
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.send("error occurred");
          } else if (result.length) {
            //console.log('Found:', result);
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

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
