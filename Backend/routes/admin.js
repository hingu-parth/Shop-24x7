var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('response from admin');
});

router.get('/products', productController.getAllProducts);

router.get('/product/:id', productController.getProductById);

router.post('/addProduct', productController.addProduct);

router.put('/updateProduct/:id', productController.updateProduct);

router.delete('/deleteProduct/:id', productController.deleteProduct);

router.get('/orders', productController.getAllOrders);

router.get('/order/:id', productController.getOrder);

router.put('/updateOrder/:id', productController.updateOrder);

router.delete('/deleteOrder/:id', productController.deleteOrder);

module.exports = router;
