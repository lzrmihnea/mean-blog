var BlogPost = require('./../models/blogPost.js');
var Comment = require('./../models/comment.js');
var tree1;

module.exports = function (app) {

    // Archive

    app.get('/archive', function (req, res, next) {

        BlogPost.find({}).sort({created: -1}).exec(function (err, posts) {
            if(posts) {
                tree1={};
                for (var x = 0; x < posts.length; x++) {
                    fillTree(posts[x]);
                }
            }

            if (err) return next(err);
            res.render('archive.jade', {posts: posts, tree: tree1});
        });
    });

};


function fillTree(post) {

    if (!tree1.years || typeof tree1.years == 'undefined') {
        modelTree();
        return;
    }
    else {
        for (var yearIndex = 0; yearIndex <= tree1.years.length; yearIndex++) {
            if (!tree1.years[yearIndex]) {
                addYearBranch();
                return;
            }
            if (tree1.years[yearIndex].year == post.created.getFullYear()) {
                for (var monthIndex = 0; monthIndex <= tree1.years[yearIndex].months.length; monthIndex++) {
                    if (!tree1.years[yearIndex].months[monthIndex]) {
                        addMonthBranchToYear();
                        return;
                    }
                    if (tree1.years[yearIndex].months[monthIndex].month == post.getFormattedMonth()) {
                        addPostLeafToMonth();
                        return;
                    }
                }
            }
        }
    }

    // Inner functions

    function modelTree() {
        tree1 = {
            years: [{
                year: post.created.getFullYear(),
                months: [
                    {   month: post.getFormattedMonth(),
                        posts: [ post ] }
                ] }] };
    }

    function addYearBranch() {
        tree1.years.push({
            year: post.created.getFullYear(),
            months: [{month: post.getFormattedMonth(), posts: [post]}]
        });
    }

    function addMonthBranchToYear() {
        tree1.years[yearIndex].months.push({
            month: post.getFormattedMonth(),
            posts: [post]
        });
    }

    function addPostLeafToMonth() {
        tree1.years[yearIndex].months[monthIndex].posts.push(post);
    }
}