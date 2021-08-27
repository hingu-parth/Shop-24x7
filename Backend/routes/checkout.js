var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.post('/order', productController.addOrder);

module.exports = router;
