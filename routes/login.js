/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
var User = require('./../models/user.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('User');

var cleanString = require('../helpers/cleanString');
var hash = require('../helpers/hash');
var crypto = require('crypto');

module.exports = function (app) {

    app.get('/signup', function (req, res) {
        res.render('signup.jade');
    });

    // Create a new accoutn
    app.post('/signup', function (req, res, next) {
        var email = cleanString(req.param('email'));
        var pass = cleanString(req.param('pass'));
        if (!(email && pass)) {
            return invalid();
        }

        User.findById(email, function (err, user) {
            if (err) return next(err);

            if (user) {
                return res.render('signup.jade', {exists: true});
            }

            crypto.randomBytes(16, function (err, bytes) {
                if (err) return next(err);

                var user = {_id: email};
                user.salt = bytes.toString('utf8');
                user.hash = hash(pass, user.salt);

                User.create(user, function (err, newUser) {
                    if (err) {
                        if (err instanceof mongoose.Error.ValidationError) {
                            return invalid();
                        }
                        return next(err);
                    }

                    // User created successfully
                    req.session.isLoggedIn = true;
                    req.session.user = email;
                    console.log('Created user: %s', email);
                    return res.redirect('/');
                })
            })
        })
    })
}