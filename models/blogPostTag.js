/**
 * Created by lazarm on 26.01.2016.
 */


var mongoose = require('mongoose');
require('express-mongoose');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    _id: String,
    nbPost: Number
});

//compile the model
module.exports = mongoose.model('BlogPostTag', schema);


