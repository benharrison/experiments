exports.getFromTable = function(req, res, tableName, find)
{
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/OrderServiceDb", function(err, db) {
        if(err) { return console.dir(err); }
        
        var collection = db.collection(tableName);
        
        collection.find().toArray(function (err, result) {
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
}