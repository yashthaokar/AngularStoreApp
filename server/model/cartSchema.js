const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    data: {
        type: []
    }
}, {
    timestamps: true
})

const CartData = new mongoose.model("CartData", cartSchema)

module.exports = CartData