const router = require('express')();
const Category = require('../models/categoryModel');
const Items = require('../models/productModel');
const Users = require('../models/usersModel');

// Customer Product listing
router.get('/', function (req, res, next) {
  Items.find((err, items) => {
    if (err) throw err;
    res.send(items);
  });
});

/* 
    Adding Item
    Method: POST  
*/
router.post('/addItem', function (req, res, next) {
  let item = new Items(req.body);
  Items.create(item, (err) => {
    if (err) throw err;
    res.send(item);
  });
});

/* 
    Order Item
    Method: POST  
*/
//Customer checkout
router.post('/order/:id', (req, res) => {
  Users.findById(req.params.id, (err, user) => {
    if (err) throw err;
    if (!user) res.status(404).send('Item does not exists.');

    let updatedUser = user;
    console.log(user.order, req.body);
    let order = [];
    if (user.order) order = user.order;
    order.push(req.body);

    updatedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      orders: order,
    };
    Users.findByIdAndUpdate(req.params.id, updatedUser, (err) => {
      if (err) throw err;
      res.send(updatedUser);
    });
  });
});

router.get('/categories', (req, res) => {
  Category.find((err, categories) => {
    if(err) throw err;
    res.send(categories);
  })
});

router.get('/category/:id', (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) throw err;
    if (!category) res.status(404).send('Item does not exists.');
    res.send(category);
  })
})

module.exports = router;
