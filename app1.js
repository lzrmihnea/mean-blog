/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');
var routes = require('./routes');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', function(err){
    if (err) throw err;

    var app = express();
    routes(app);

    app.listen(3000, function() {
        console.log('now listening on http://localhost:3000');
    })
    //mongoose.disconnect();
});