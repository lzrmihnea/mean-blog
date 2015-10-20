var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');
var moment = require('moment');

module.exports = function (app) {
    // Archive
    app.get('/archive', function(req, res, next){
        BlogPost.find({}).sort({created:-1}).exec(function(err,posts){

            var yearsWithPosts = getYearsWithPosts(posts);

            if(err) return next(err);
            res.render('archive.jade', {posts:posts, yearsWithPosts:yearsWithPosts});
        });
    });
};

function YearOfBlogPosts(year) {
    this.year = year;
    this.monthsOfBlogPosts = [];
    this.pushMonth = function(monthOfBlogPosts) {
        this.monthsOfBlogPosts.push(monthOfBlogPosts);
    }
}

function getYearsWithPosts(posts) {
    var yearsOfPosts = [];
    posts.forEach(function (post, indexOfPost, postsArray) {
        if(!(post.created.getFullYear() in yearsOfPosts)) {
            yearsOfPosts[post.created.getFullYear()] = moment(post.created).format('MMM');
        }
    });
    return yearsOfPosts;
}
