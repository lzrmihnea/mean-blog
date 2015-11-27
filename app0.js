/**
 * Created by Mihnea on 5/1/2015.
 */
var express = require('express');

// Add Mongoose query and promise to support to express
require('express-mongoose');

var routes = require('./routes/index');
var middleware = require('./middleware/index');
var mongoose = require('mongoose');

const readOnlyUser_MongoLab = 'mongodb://read-user:read-user-password@ds059634.mongolab.com:59634/croc-blog';

mongoose.connect(readOnlyUser_MongoLab, function (err) {
    if (err) throw err;

    var app = express();
    middleware(app);
    routes(app);

    const PORT_NUMBER = 3000;
    app.listen(PORT_NUMBER, function () {
        const LOCALHOST_LINK = 'http://localhost:' + PORT_NUMBER;
        const IRINA_LOGHIN = '/irinaloghin';

        writeInitialConsoleMessage();

        function writeInitialConsoleMessage() {
            addNewlineToConsole();
            console.log('Blog address: ' + LOCALHOST_LINK);
            addNewlineToConsole();
            console.log('Login backdoor ' + LOCALHOST_LINK + IRINA_LOGHIN);
            addNewlineToConsole();
            function addNewlineToConsole() {
                console.log();
            }
        }
    })
    //mongoose.disconnect();
});