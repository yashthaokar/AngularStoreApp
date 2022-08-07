require('dotenv').config();
const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');
const port = process.env.PORT || 6000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./conn/Db')

app.use('/api', productRouter)
app.use('/cart', cartRouter)



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})