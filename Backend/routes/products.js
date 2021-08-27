var express = require('express');
var Product = require('../models/productModel');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

module.exports = router;
