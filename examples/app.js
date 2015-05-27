/**
 * Created by Mihnea on 4/6/2015.
 */
//var http = require('http');
//
//var server = http.createServer(function (request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello world oaie!\n");
//});
//
//server.listen(8000);
//console.log("Server running at http://localhost:8000");

var express = require('express'),
    app = express(),
    path = require('path'),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views',  path.join(__dirname, 'views'));

var mongoclient = new MongoClient(new Server('localhost', 27017));


mongoclient.connect("mongodb://localhost:27017/test", function(err, db) {
    if(err) {
        throw err;
    } else {
        app.get('/', function(req,res){
            db.collection('test').findOne({}, function(err, doc){
                res.render('hello', doc);
            });
        });

        app.get('*', function(req,res){
            res.send("Page not found!",404);
        });

    }

    app.listen(3000);
    console.log("Express started on port 8080!");
});

