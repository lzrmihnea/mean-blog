/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');
var routes = require('./routes');
var middleware = require('./middleware');
//var initializedModels = require('./models/models.js').initialize();
//var models = require('./models');
var mongoose = require('mongoose');
//var User = mongoose.model('./routes/user.js', blogUser);

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