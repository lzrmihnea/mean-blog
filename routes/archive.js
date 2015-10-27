var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');
var moment = require('moment');

module.exports = function (app) {
    var tree1 = {};
    // Archive

    app.get('/archive', function (req, res, next) {
        var data;
        BlogPost.find({}).sort({created: -1}).exec(function (err, posts) {

            //from HERE
            for (x= 0; x < posts.length; x++) {
                fillTree(posts[x]);
            }
            console.log(tree1);
            //until HERE

            if (err) return next(err);
            res.render('archive.jade', {posts: posts});
        });
    });


    function fillTree(post) {
        //BEFORE
        if (!tree1.years || typeof tree1.years == 'undefined') {
            tree1 = {name:"tree", years:[{
                year: post.created.getFullYear(),
                months: [
                    {
                        month:post.getFormattedMonth(),
                        posts: [
                            {post: post.title}
                        ]
                    }
                ] }]};
            console.log(tree1);
        }
        else {
            for(var yearIndex=0; yearIndex<=tree1.years.length; yearIndex++) {
                if(tree1.years[yearIndex].year==post.created.getFullYear()) {
                    for(var monthIndex=0; monthIndex<=tree1.years[yearIndex].months.length; monthIndex++) {
                        if(tree1.years[yearIndex].months[monthIndex].month==post.getFormattedMonth()){
                            for(var postIndex=0; postIndex<=tree1.years[yearIndex].months[monthIndex].posts.length; postIndex++) {
                                if(!tree1.years[yearIndex].months[monthIndex].posts[postIndex]) {
                                    tree1.years[yearIndex].months[monthIndex].posts.push(post);
                                    return;
                                }
                            }
                        } else {
                            tree1.years[yearIndex].months.push({ month:post.getFormattedMonth(), posts: [ {post: post.title} ] });
                            return;
                        }
                    }
                } else { tree1.years.push({ year: post.created.getFullYear(), months: [ { month:post.getFormattedMonth(), posts: [ {post: post.title} ] } ] });
                return;}
            }
        }
    }
};