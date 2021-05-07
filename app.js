const express = require('express')
const mongoose = require('mongoose')

const productRoutes = require('./routes/product-routes')

const app = express()

app.use(express.json())

app.use('/api', productRoutes)

mongoose
  .connect('mongodb://127.0.0.1:27017/products')
  .then(() => {
    app.listen(8000)
  })
  .catch((err) => {
    console.log(err)
  })
