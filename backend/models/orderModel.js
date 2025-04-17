const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    cartItem: Array,
    amount: String,
    status: String,
    createdAt: Date
})

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;