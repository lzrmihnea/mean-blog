/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');

// Add Mongoose query and promise to support to express
require('express-mongoose');

var routes = require('./routes/index');
var middleware = require('./middleware/index');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', function(err){
    if (err) throw err;

    var app = express();
    middleware(app);
    routes(app);

    app.listen(3000, function() {
        console.log('now listening on http://localhost:3000');
    })
    //mongoose.disconnect();
});