/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');

// Add Mongoose query and promise to support to express
require('express-mongoose');

var routes = require('./routes/index');
var middleware = require('./middleware/index');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, function (err) {
    if (err) throw err;

    var app = express();
    middleware(app);
    routes(app);

    var appPort = process.env.PORT;
    if (appPort == undefined) {
        appPort = 5000;
    }
    app.listen(appPort, function () {

    });

    // SSL validation
    app.get("/"+process.env.SSL_VALIDATION_TXT_FILE, function (req, res) {
        // Read the file and print its contents.
        require('fs').readFile("./"+process.env.SSL_VALIDATION_TXT_FILE, 'utf8', function(err, data) {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    });

    //mongoose.disconnect();
});