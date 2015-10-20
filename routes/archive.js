var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');

module.exports = function (app) {
    // Archive
    app.get('/archive', function(req, res, next){
        BlogPost.find({}).sort({created:-1}).exec(function(err,posts){
            if(err) return next(err);
            res.render('archive.jade', {posts:posts});
        });
    });
};