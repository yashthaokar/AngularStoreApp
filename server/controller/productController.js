const Product = require('../model/productSchema')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dbdtk77uc',
    api_key: "863992813938763",
    api_secret: 'CN6B_iWE_BXmRbeAX7tAXMJVFYc',
    secure: true
});


const addProduct = (req, res) => {
    const { name, price, description, image } = req.body
    const imageFile = req.files.image.path
    // console.log(req.files.image.path)

    try {
        cloudinary.uploader.upload(imageFile, async function (error, result) {
            if (error) {
            } else {
                const newProduct = new Product({
                    name, price, description, image: result.url
                })
                await newProduct.save()
                res.status(201).json(newProduct)
            }
        })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const getProduct = async (req, res) => {

    try {
        const allProduct = await Product.find()
        res.status(200).json(allProduct)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    addProduct,
    getProduct
}