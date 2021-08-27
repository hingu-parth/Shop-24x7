

var mongoose = require('mongoose');


var orderSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    total: Number,
    username: String,
    orderPlacedOn: {
        type: String,
        default: new Date()
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    cart: []
});

module.exports = mongoose.model('Order', orderSchema);