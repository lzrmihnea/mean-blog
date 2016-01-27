/**
 * Created by Mihnea on 5/17/2015.
 */

var mongoose = require('mongoose');
var BlogPostTag = require('./../models/blogPostTag.js');
var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');
var loggedIn = require('../middleware/loggedIn');
var Recaptcha = require('recaptcha').Recaptcha;
var https = require('https');

var PRIVATE_KEY = process.env.GOOGLE_RECAPTCHA_KEY_PRIVATE;

//Now, this call won't fail because BlogPost has been added as a schema.
mongoose.model('BlogPost');
mongoose.model('Comment');


module.exports = function (app) {
    // Create
    app.get("/create", loggedIn, function (req, res) {
        res.render('post/create.jade');
    });

    app.post("/create", loggedIn, function (req, res, next) {
        const WHITESPACE = /\s+/g;
        const COMMA = ',';

        var body = req.body.blogPostBody;
        var title = req.body.title;
        var titleWithoutDashes = title.split("-").join("");
        var titleWithoutWhitespaces = titleWithoutDashes.split(/\s+?/).join("-");
        console.log(titleWithoutWhitespaces);

        var id = titleWithoutWhitespaces;
        var user = req.session.user;

        var tagString = req.body.tags;
        var tags = tagString.replace(WHITESPACE, '').split(COMMA);
        var tags = tags.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        tags.forEach(function (tag) {
            console.log(tag + " ");
        });

        var newBlogPost = {
            _id: id,
            body: body,
            title: title,
            author: user,
            tags: tags
        };
        BlogPost.create(newBlogPost, function (err, post) {
            if (err) {
                return res.render('post/create.jade', {errors: err});
            } else {

                // Create each tag
                post.tags.forEach(function(tag){
                    BlogPostTag.update({_id: tag}, {$inc: {numberOfPosts: 1}}, {
                        upsert: true,
                        setDefaultsOnInsert: true
                    }, function (err, updatedOrInsertedTag) {
                        if (err) {
                            return next(err);
                        }
                        console.log(updatedOrInsertedTag);
                    });
                });

                res.redirect('/');
            }
        });
    });

    // read blog posts
    app.get("/a/:id", function (req, res, next) {

        var id = req.params.id;

        // TODO check out Promises A+ or something
        var promise = BlogPost.findComments(id).sort('created').select('-_id').exec();

        var query = BlogPost.findById(id).populate('author');

        query.exec(function (err, post) {
            if (err) return next(err);

            if (!post) return next(); //404

            res.render('post/view.jade', {post: post, comments: promise, title: post.title});
        });
    });

    // DELETE
    // TODO Make a small popup appear after clicking on delete delete
    app.get("/a/remove/:id", loggedIn, function (req, res, next) {
        var id = req.params.id;

        BlogPost.findOne({_id: id}, function (err, post) {
            if (err) return next(err);

            // Validate logged in user who authored this post
            if (post.author != req.session.user) {
                return res.send(403);
            }

            post.remove(function (err) {
                if (err) return next(err);
                //Removing tag
                post.tags.forEach(function (tag) {
                    BlogPostTag.update({_id: tag}, {$inc: {numberOfPosts: -1}}, function (err) {
                        if (err) return next(err);
                    });
                });
                // TODO display a confirmation message to user
                console.log("Blogpost deleted!");
                res.redirect('/');
            });
        })
    });

    // UPDATE
    app.get("/a/edit/:id", loggedIn, function (req, res, next) {
        res.render('post/create.jade', {
            post: BlogPost.findById(req.params.id)
        })
    });

    app.post("/a/edit/:id", loggedIn, function (req, res, next) {
        BlogPost.edit(req, function (err) {
            if (err) return next(err);
            res.redirect("/");
        })
    })

    // COMMENTS
    app.post("/a/:id", function (req, res, next) {
        var id = req.params.id;
        var text = req.body.commentText;
        var author = req.body.commentAuthor;

        var query = BlogPost.findById(id).populate('author');

        query.exec(function (err, post) {
            if (err) return next(err);

            if (!post) return next(); //404

            verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {

                var validationErrorMessages = validateComment(success);
                if (validationErrorMessages.length > 0) {
                    var promise = BlogPost.findComments(id).sort('created').select('-_id').exec();
                    res.render('post/view.jade', {
                        post: post,
                        comments: promise,
                        commentErrorMessages: validationErrorMessages,
                        commentText: text
                    });
                } else {
                    // TODO: take them back to the previous page
                    // and for the love of everyone, restore their inputs
                    Comment.create({
                            post: id,
                            text: text,
                            author: author
                        },
                        function (err, comment) {
                            if (err) return next(err);
                        });
                    var promise = BlogPost.findComments(id).sort('created').select('-_id').exec();
                    res.render('post/view.jade', {post: post, comments: promise, title: post.title});
                }
            });
        });

        function validateComment(success) {
            var validationErrorMessages = new Array();
            if (isEmpty(author)) {
                validationErrorMessages.push({message: "Can't have anyone posting without a name"});
            }
            if (isEmpty(text)) {
                validationErrorMessages.push({message: "A comment is mandatory"});
            }
            if (!success) {
                validationErrorMessages.push({message: "Human confirmation is neccessary"})
            }
            return validationErrorMessages;
        }

        function isEmpty(str) {
            return (!str || 0 === str.length || /^\s*$/.test(str) || str.length === 0 || !str.trim());
        }
    });


// Helper function to make API call to recatpcha and check response
    function verifyRecaptcha(key, callback) {
        https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + PRIVATE_KEY + "&response=" + key, function (res) {
            var data = "";
            res.on('data', function (chunk) {
                data += chunk.toString();
            });
            res.on('end', function () {
                try {
                    var parsedData = JSON.parse(data);
                    callback(parsedData.success);
                } catch (e) {
                    callback(false);
                }
            });
        });
    }
};