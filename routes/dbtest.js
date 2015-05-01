/**
 * Created by Mihnea on 4/5/2015.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) {
        throw err;
    } else {
        var cursor = db.collection('test').find();

        // Execute the each command, triggers for each document
        cursor.each(function(err, item) {
            // If the item is null then the cursor is exhausted/empty and closed
            if(item == null) {
                db.close(); // you may not want to close the DB if you have more code....
                return;
            } else {
                console.log(item);
            }
            // otherwise, do something with the item
        });

    }
    // Declare success
    console.dir("Successfully called findOne()!");
});