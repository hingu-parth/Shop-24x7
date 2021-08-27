var Product = require('../models/productModel');
var Order = require('../models/ordersModel');

module.exports.getAllProducts = (req, res) => {
    Product.find((err, products) => {
        if (err) throw err;
        res.send(products);
    })
};

module.exports.getProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    });
};

module.exports.addProduct = (req, res) => {
    var product = new Product(req.body);
    Product.create(product, (err) => {
        if (err) throw err;
        res.send('Product Added Successfully.');
    })
};

module.exports.updateProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        if (!product) return res.status(404).send('Product doesnt exist with this Id.');
        var updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            discountedPrice: req.body.discountedPrice,
            category: req.body.category,
            image: req.body.image,
            isTopProduct: req.body.isTopProduct,
            description: req.body.description
        };
        Product.findByIdAndUpdate(req.params.id, updatedProduct, (err) => {
            if (err) throw err;
            res.status(200).send('Product updated successfully');
        });
    });
};

module.exports.deleteProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        if (!product) return res.status(404).send('Product doesnt exist with this Id.');
        Product.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;
            res.status(200).send('Product Deleted successfully');
        })
    })
};
//---------------------------------------------------------------------//
// order queries
module.exports.getAllOrders = (req, res) => {
    Order.find((err, orders) => {
        if (err) throw err;
        res.send(orders);
    })
};

module.exports.addOrder = (req, res) => {
    var order = new Order(req.body);
    console.log(order);
    Order.create(order, (err) => {
        if (err) throw err;
        res.send('Order Added Successfully.');
    })
};

module.exports.updateOrder = (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err) throw err;
        if (!order) return res.status(404).send('Order doesnt exist with this Id.');
        var updatedOrder = req.body;
        Order.findByIdAndUpdate(req.params.id, updatedOrder, (err) => {
            if (err) throw err;
            res.status(200).send('Order updated successfully');
        });
    });
};

module.exports.deleteOrder = (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err) throw err;
        if (!order) return res.status(404).send('Order doesnt exist with this Id.');
        Order.deleteMany({_id: (req.params.id)}, (err)=>{
            if(err) throw err;
            res.status(200).send('order deleted successfully');
        })
    })
};

module.exports.getOrder = (req, res) => {
    Order.findById(req.params.id, (err, order) => {
        if (err) throw err;
        if (!order) return res.status(404).send('Order doesnt exist with this Id.');
        res.send(order);
    })
};