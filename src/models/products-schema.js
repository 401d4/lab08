'use strict';

var mongoose = require('mongoose'); //BRING IN MONGOOSE

const products = mongoose.Schema({ //HAVE MONGOOSE CREATE A SCHEMA
  name: String,
  description: String,
});

module.exports = mongoose.model('products', products); //EXPORT THE SCHEMA AS PART OF A MODEL