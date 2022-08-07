const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: []
    }
}, {
    timestamps: true
})

const Product = new mongoose.model("Product", productSchema)

module.exports = Product