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
    });

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
    });

    // read blog posts
    app.get("/post/:id", function(req, res, next) {
        var query = BlogPost.findById(req.params.id);

        query.populate('author')

        query.exec(function(err,post) {
            if(err) return next(err);

            if(!post) return next(); //404

            res.render('post/view.jade', {post:post});
        });
    });

    // DELETE
    // TODO Make a small popup appear after clicking on delete delete
    app.get("/post/remove/:id", loggedIn, function(req, res, next){
        var id = req.params.id;

        BlogPost.findOne({_id:id}, function(err,post){
            if(err) return next(err);

            // Validate logged in user who authored this post
            if(post.author != req.session.user._id) {
                return res.send(403);
            }

            post.remove(function(err){
                if(err) return next(err);

                // TODO display a confirmation message to user
                res.redirect('/');
            })
        })
    });

    // UPDATE
    app.get("/post/edit/:id", loggedIn, function(req,res,next){
        res.render('post/create.jade',{
            post: BlogPost.findById(req.params.id)
        })
    });

    app.post("/post/edit/:id", loggedIn, function(req,res,next){
        BlogPost.edit(req, function(err){
            if(err) return next(err);
            //res.redirect("/post/"+req.params.id);
            res.redirect("/");
        })
    })
};