const mongoose = require('mongoose');

const itemsModel = mongoose.Schema({
  name: String,
  type: String,
  description: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model('Item', itemsModel);
