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

    // SSL validation
    app.get("/C9AA3311FC272DF9B4B6C1130086576F.txt", function (req, res) {
        const SSL_VALIDATION_TXT_FILE = 'C9AA3311FC272DF9B4B6C1130086576F.txt';
        console.log("here");
        // Read the file and print its contents.
        require('fs').readFile("./"+SSL_VALIDATION_TXT_FILE, 'utf8', function(err, data) {
            if (err) throw err;
            console.log(data);
            res.write(data);
            res.end();
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