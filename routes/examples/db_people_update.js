var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var mongoclient = new MongoClient(new Server('localhost', 27017));

mongoclient.connect("mongodb://localhost:27017/test", function(err, db) {
    if(err) throw err;

    var query = {'name':'eric'};

    db.collection('people').findOne(query,function(err, doc){
        if(err) throw err;
        if(!doc) {console.log("failed")};

        query['_id'] = doc['_id'];
        doc['age']=69;
        db.collection('people').update(query, doc, function(err, updated) {
            if(err) throw err;
            console.dir("successfully updated!");

            return db.close();
        });
    });
});
