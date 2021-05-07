const express = require('express')

const router = express.Router()

const productControllers = require('../controllers/product-controllers')

router.get('/products', productControllers.getAllProducts)

router.get('/products/:id', productControllers.getOneProduct)

router.post('/add-product', productControllers.addProduct)

module.exports = router
