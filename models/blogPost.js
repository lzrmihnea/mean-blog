/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
require('express-mongoose');
var User = require('mongoose').model('User');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    title: {type: String, trim: true},
    created: {type: Date, default: Date.now},
    body: String,
    author: {type: String, ref: 'User'}
});

schema.statics.edit = function(req,callback) {
    var id=req.params.id;
    var author=req.session.user;

    // Validate if current user authored this blogpost
    var query = { _id:id, author:author};

    var update={};
    //TODO req.params... sau req.body... ?
    update.title=req.body.title;
    update.body=req.body.body;

    this.update(query,update,function(err,numAffected){
        if(err) return callback(err);

        if(0==numAffected) {
            return callback(new Error('no post to modify'));
        }

        callback();
    })
}

//compile the model
module.exports = mongoose.model('BlogPost', schema);

//TODO
// When new blogposts are created, lets tweet
// npm install mongoose-lifecycle
// http://plugins.mongoosejs.com?q=events
//var lifecycle = require('mongoose-lifecycle');
//schema.plugin(lifecycle);

//// handle events
//Post.on('afterInsert', function(post){
//    // fake tweet this
//    var url = "http://localhost:3000/posts/"
//    console.log("Read my new blog post! %s%s", url, post.id);
//})
