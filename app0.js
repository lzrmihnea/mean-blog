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

        const SERVER_IP_ADDRESS = '127.0.0.1';
        const LOCALHOST_LINK = 'http://' + SERVER_IP_ADDRESS + ":" + appPort;
        const IRINA_LOGHIN = '/irinaloghin';

        writeInitialConsoleMessage();

        function writeInitialConsoleMessage() {
            addNewlineToConsole();
            console.log('Blog address: ' + LOCALHOST_LINK);
            addNewlineToConsole();
            console.log('Login backdoor: ' + LOCALHOST_LINK + IRINA_LOGHIN);
            addNewlineToConsole();
            function addNewlineToConsole() {
                console.log();
            }
        }
    })
    //mongoose.disconnect();
});