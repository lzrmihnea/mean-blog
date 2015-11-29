var errors = require('./errors');
var login = require('./login');
var posts = require('./posts');
var archive = require('./archive');
var mongoose = require('mongoose');
var BlogPost = mongoose.model('BlogPost');
var User = mongoose.model('User');

module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {

        var postsFromLastWeekQuery = {
            $where: function () {
                const ONE_DAY = 24 * 60 * 60 * 1000;
                return Date.now() - this.created < (ONE_DAY * 7)
            }
        };

        BlogPost.find(postsFromLastWeekQuery).sort({created: -1}).limit(10).exec(function (err, posts) {
            if (err) return next(err);

            var foundError = req.session.foundError;
            req.session.foundError = null;

            res.render('home.jade', {posts: posts, err: foundError});
        });

    });

    //login/logout routes
    login(app);

    //blog posts crud
    posts(app);

    //archive
    archive(app);

    //error handlers
    errors(app);
}