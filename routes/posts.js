/**
 * Created by Mihnea on 5/17/2015.
 */

var mongoose = require('mongoose');
var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');
var loggedIn = require('../middleware/loggedIn');

//Now, this call won't fail because BlogPost has been added as a schema.
mongoose.model('BlogPost');
mongoose.model('Comment');


module.exports = function (app) {
    // Create
    app.get("/create", loggedIn, function (req, res) {
        res.render('post/create.jade');
    });

    app.post("/create", loggedIn, function (req, res, next) {
        var body = req.body.blogPostBody;
        var title = req.body.title;
        var titleWithoutDashes = title.split("-").join("");
        var titleWithoutWhitespaces = titleWithoutDashes.split(/\s+?/).join("-");
        console.log(titleWithoutWhitespaces);
        var id = titleWithoutWhitespaces;
        var user = req.session.user;

        BlogPost.create({
            _id: id,
            body: body,
            title: title,
            author: user
        }, function (err, post) {
            if (err) {
                    return res.render('post/create.jade', {errors:err});
            } else {
                res.redirect('/');
            }
        });
    });

    // read blog posts
    app.get("/a/:id", function(req, res, next) {

        var id=req.params.id;

        // TODO check out Promises A+ or something
        var promise = BlogPost.findComments(id).sort('created').select('-_id').exec();

        var query = BlogPost.findById(id).populate('author');

        query.exec(function(err,post) {
            if(err) return next(err);

            if(!post) return next(); //404

            res.render('post/view.jade', {post:post, comments:promise});
        });
    });

    // DELETE
    // TODO Make a small popup appear after clicking on delete delete
    app.get("/a/remove/:id", loggedIn, function(req, res, next){
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
    app.get("/a/edit/:id", loggedIn, function(req,res,next){
        //loggedIn(req, res, next);
        console.log('passed');
        res.render('post/create.jade',{
            post: BlogPost.findById(req.params.id)
        })
    });

    app.post("/a/edit/:id", loggedIn, function(req,res,next){
        BlogPost.edit(req, function(err){
            if(err) return next(err);
            //res.redirect("/a/"+req.params.id);
            res.redirect("/");
        })
    })

    // COMMENTS
    app.post("/a/comment/:id", loggedIn, function(req, res, next) {
        var id= req.params.id;
        var text = req.body.commentText;
        var author = req.session.user;

        Comment.create({
            post: id,
            text: text,
            author: author},
            function(err,comment){
            if(err) return next(err);});

        // TODO probably want to do this all with xhr
        res.redirect("/a/"+id);
        });
};