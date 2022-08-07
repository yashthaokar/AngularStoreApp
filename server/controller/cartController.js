const CartData = require('../model/cartSchema')
const Product = require('../model/productSchema')


const product = async (req, res) => {
    const addP = new CartData({ data: req.body.data })
    await addP.save()
    res.status(201).json(addP)
}

const addProductToCart = async (req, res) => {
    const { productId, fieldId } = req.params
    const newItem = await Product.findOne({ _id: productId })

    try {
        const getItem = await CartData.findByIdAndUpdate(fieldId, {
            $push: { data: { id: newItem._id, name: newItem.name, image: newItem.image, price: newItem.price, description: newItem.description } }
        }, { new: true })

        res.status(201).json(getItem)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getAllCartData = async (req, res) => {

    try {
        const recivingItem = await CartData.find()
        res.status(200).json(recivingItem)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const removeProductFromCart = async (req, res) => {

    const { productId, fieldId } = req.params
    const newItem = await Product.findOne({ _id: productId })

    try {
        const getItem = await CartData.findByIdAndUpdate(fieldId, {
            $pull: { data: { id: newItem._id, name: newItem.name, image: newItem.image, price: newItem.price, description: newItem.description } }
        }, { new: true })


        res.status(201).json(getItem)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const removeAllProductFromCart = async (req, res) => {
    const { fieldId } = req.params
    try {
        const getItem = await CartData.findByIdAndUpdate(fieldId, {
            $pull: { data: { Object } }
        }, { new: true })

        res.status(201).json(getItem)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    addProductToCart,
    removeProductFromCart,
    removeAllProductFromCart,
    getAllCartData,
    product
}