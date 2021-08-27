const mongoose = require('mongoose');

const categoryModel = mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model('Category', categoryModel);
