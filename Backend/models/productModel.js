var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    discounted_price: Number,
    category_name: String,
    description: String,
    image: String,
    rating: Number,
    created_on: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
