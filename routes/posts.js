/**
 * Created by Mihnea on 5/17/2015.
 */

var mongoose = require('mongoose');
var BlogPost = require('./../models/blogPost.js');
var loggedIn = require('../middleware/loggedIn');

//Now, this call won't fail because BlogPost has been added as a schema.
mongoose.model('BlogPost');


module.exports = function (app) {
    // Create
    app.get("/post/create", loggedIn, function (req, res) {
        res.render('post/create.jade');
    })

    app.post("/post/create", loggedIn, function (req, res, next) {
        var body = req.body.body;
        var title = req.body.title;
        var user = req.session.user;

        BlogPost.create({
            body: body,
            title: title,
            author: user
        }, function (err, post) {
            if (err) return next(err);
            res.redirect('/');
        });
    })

    // read blog posts
    app.get("/post/:id", function(req, res, next) {
        var query = BlogPost.findById(req.param('id'));

        query.populate('author')

        query.exec(function(err,post) {
            if(err) return next(err);

            if(!post) return next(); //404

            res.render('post/view.jade', {post:post});
        })
    })
}