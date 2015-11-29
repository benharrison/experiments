var express = require('express');
var app = express();

//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/OrderServiceDb');

app.get('/', function (req, res) {
  res.send('Home!');
});

app.get('/menu', function (req, res) {
    //res.send('Menu');
    // Retrieve
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection('MenuItems');
        
        collection.find().toArray(function (err, result) {
          if (err) {
            console.log(err);
          } else if (result.length) {
            //console.log('Found:', result);
            res.send(result);
          } else {
            console.log('No document(s) found with defined "find" criteria!');
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