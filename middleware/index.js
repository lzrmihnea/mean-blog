/**
 * Created by Mihnea on 5/2/2015.
 */
var express = require('express');

module.exports = function(app) {
    app.use(express.logger('dev'));

    // Good for now
    // In the future, use connect-mongo or similar
    // for persistant sessions
    app.use(express.cookieParser());
    app.use(express.session({secret: 'building a blog'}));

    app.use(express.bodyParser());

    // Expose session to views
    app.use(function (req, res, next) {
        res.locals.session = req.session;
        next();
    })
}