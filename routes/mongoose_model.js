/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
var validEmail = require('../helpers/validate/email');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    _id: {type:String, validate:validEmail},
    name: {first:String, last:String},
    salt: {type:String, required:true},
    hash: {type:String, required:true},
    created: {type:Date, default:Date.now}
});

mongoose.model('User', schema);