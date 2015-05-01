var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

//MongoClient.connect("mongodb://localhost:27017," +
//"localhost:27018,localhost:27019", function(err,db) {

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.connect("mongodb://localhost:27017/test", function(err,db) {
    if (err) throw err;

    var documentNumber = 0;
    function insertDocument() {
        db.collection("repl").insert({ ' documentNumber' : documentNumber++},
            function(err,doc){
                if (err) throw err;
                console.log(doc);
            });

        console.log("Dispatched insert");
        setTimeout(insertDocument, 1000);
    }
    insertDocument();
});