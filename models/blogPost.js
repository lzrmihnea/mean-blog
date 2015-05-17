/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    title: {type: String, trim: true},
    created: {type: Date, default: Date.now},
    body: String,
    author: {type: String, ref: 'User'}
});

//TODO
// When new blogposts are created, lets tweet
// npm install mongoose-lifecycle
// http://plugins.mongoosejs.com?q=events
//var lifecycle = require('mongoose-lifecycle');
//schema.plugin(lifecycle);

//compile the model
module.exports = mongoose.model('BlogPost', schema);

//// handle events
//Post.on('afterInsert', function(post){
//    // fake tweet this
//    var url = "http://localhost:3000/posts/"
//    console.log("Read my new blog post! %s%s", url, post.id);
//})