'use strict';

var mongoose = require('mongoose'); //BRING IN MONGOOSE

const categories = mongoose.Schema({ //HAVE MONGOOSE CREATE A SCHEMA
  name: String,
  description: String,
});

module.exports = mongoose.model('categories', categories); //EXPORT THE SCHEMA AS PART OF A MODEL