const express = require('express')
const { addProduct, getProduct } = require('../controller/productController')
const productRouter = express.Router()
const multipart = require('connect-multiparty')
const path = require('path')
const multiPartyMiddleWare = multipart({ uploadDir: path.join(__dirname, "uploads") })

productRouter.post('/post',multiPartyMiddleWare, addProduct)

productRouter.get('/get', getProduct)

module.exports = productRouter