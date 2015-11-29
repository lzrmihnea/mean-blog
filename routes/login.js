/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
var User = require('./../models/user.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('User');

var cleanString = require('../helpers/cleanString');
var hash = require('../helpers/hash');
//TODO crypto
var crypto = require('crypto');

module.exports = function (app) {

    app.get('/irinaloghin', function (req, res) {
        res.render('login.jade');
    });

    app.post('/irinaloghin', function (req, res, next) {
        //TODO add cleanString
        var email = req.body.email.toLowerCase();
        var pass = req.body.pass;
        if (!(email && pass)) {
            return invalid();
        }

        User.findById(email, function (err, user) {
            if (err) return next(err);

            if (!user) {
                return invalid();
            }

            // Check pass
            if (user.hash != hash(pass, user.salt)) {
                return invalid();
            }

            req.session.isLoggedIn = true;
            req.session.user = email;
            console.log('Logged in user: %s', email);
            return res.redirect('/');
        })
        function invalid() {
            return res.render('login.jade', {invalid: true});
        }
    })
    app.get('/logout', function (req, res) {
        req.session.isLoggedIn = false;
        req.session.user = null;
        return res.redirect('/');
    });
    //app.get('/register', function (req, res) {
    //    res.render('register.jade');
    //});
    //
    //app.post('/register', function (req, res, next) {
    //    //var email = cleanString(req.params('email'));
    //    //var pass = cleanString(req.params('pass'));
    //    //TODO add cleanString
    //    var email = req.body.email.toLowerCase();
    //    var pass = req.body.pass;
    //    if (!(email && pass)) {
    //        return invalid();
    //    }
    //
    //    User.findById(email, function (err, user) {
    //        if (err) return next(err);
    //
    //        if (user) {
    //            return res.render('register.jade', {exists: true});
    //        }
    //
    //        crypto.randomBytes(16, function (err, bytes) {
    //            if (err) return next(err);
    //
    //            var user = {_id: email};
    //            user.salt = bytes.toString('utf8');
    //            user.hash = hash(pass, user.salt);
    //
    //            User.create(user, function (err, newUser) {
    //                if (err) {
    //                    if (err instanceof mongoose.Error.ValidationError) {
    //                        return invalid();
    //                    }
    //                    return next(err);
    //                }
    //
    //                req.session.isLoggedIn = true;
    //                req.session.user = email;
    //                console.log('Created user: %s', email);
    //                return res.redirect('/');
    //            })
    //        })
    //    })
    //    function invalid() {
    //        return res.render('register.jade', {invalid: true});
    //    }
    //})

}