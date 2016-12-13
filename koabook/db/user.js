'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	uid:Number,
	username:String,
	creatTime:Date,
	lastLogin:Date
})

module.exports = mongoose.model('User',UserSchema);