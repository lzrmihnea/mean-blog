var express = require('express'),
    app = express(),
    path = require('path'),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

//app.engine('html', cons.swig);
//app.set('view engine', 'html');
//app.set('views',  path.join(__dirname, 'views'));

var mongoclient = new MongoClient(new Server('localhost', 27017));


mongoclient.connect("mongodb://localhost:27017/test", function(err, db) {
    if(err) throw err;

        db.collection('people').find().toArray(function(err, docs){
            if(err) throw err;

            console.dir(docs);

            db.close();
        });
    });

//
//app.listen(8080);
//console.log("Express started on port 8080!");
