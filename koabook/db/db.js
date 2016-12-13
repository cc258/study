'use strict';

var mongoose = require('mongoose');
var config = require('../config');

var db = mongoose.connect(config.MongoDB.HOST+':'+config.MongoDB.PORT+'/'+config.MongoDB.NAME);
// mongoose.connect('mongodb://localhost/text');

module.exports = db;