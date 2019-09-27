'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

mongoose.connect('mongodb://localhost:27017/myapp', mongooseOptions);

require('./src/app.js').start(process.env.PORT || 3000);
