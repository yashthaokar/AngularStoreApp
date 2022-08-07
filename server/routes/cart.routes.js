const express = require('express')
const { addProductToCart, removeAllProductFromCart, removeProductFromCart, getAllCartData, product } = require('../controller/cartController')
const cartRouter = express.Router()

cartRouter.put('/update/:fieldId/:productId', addProductToCart)

cartRouter.post('/post', product)

cartRouter.get('/get', getAllCartData)

cartRouter.delete('/deleteone/:fieldId/:productId', removeProductFromCart)

cartRouter.delete('/deleteall/:fieldId', removeAllProductFromCart)

module.exports = cartRouter