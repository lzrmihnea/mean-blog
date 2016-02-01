/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');
require('express-mongoose');
var routes = require('./routes/index');
var middleware = require('./middleware/index');
var mongoose = require('mongoose');
var fs = require('fs');

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

    //require('https').createServer({
    //    key: fs.readFileSync("./config/croc.space.key"),
    //    cert: fs.readFileSync("./config/croc_space.crt"),
    //    ca: fs.readFileSync("./config/croc_space.ca-bundle"),
    //    requestCert: true,
    //    rejectUnauthorized: false
    //}, app).listen(appPort, function () {
    //    debug("HTTPS Server listening on port: %s, in %s mode", appPort, app.get('env'));
    //});
});