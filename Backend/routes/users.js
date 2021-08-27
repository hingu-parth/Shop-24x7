var express = require('express');
var router = express();
let Users = require('../models/usersModel');
var userController = require('../controllers/userController');

var passport = require('passport');

router.get('/:name', function(req, res) {
  // get the user's name from the url and find that user
  Users.findByUsername(req.params.name, (err,data) => {
    if(err) throw err;
    res.json(data);
  })
  // Users.find({username: req.params.name}, function(err, data){
  //     if(err) console.log(err)
  //     res.send(data);
  // });
});

// Login Authentication
router.post('/login', passport.authenticate('local', {
  successRedirect: "/products",
  failureMessage: "/login"
}), (req, res) => {
  console.log('Trying to Login');
})

// POST Register User
router.post('/register', (req, res) => {
  var user = new Users(req.body);
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // email: req.body.email,
    // password: req.body.password
  // });
  Users.register(user, req.body.password, function (err, user) {
    console.log('Entered in Post Method');
    if (err) {
      console.log(err);
      res.statusMessage("Error Please Login again");
    }
    passport.authenticate("local")(req, res, function () {
      res.status(200);
    })
  })

})

/* GET users profile by ID. */
router.get('/profile/:id', function (req, res, next) {
  Users.findByUsername(req.params.id, (err, user) => {
    if (err) throw err;
    // if (!user) res.status(404).send('User does not exists.');
    res.status(200).send(user);
  });
});

// POST Edit User Profile using ID
router.put('/editprofile/:id', userController.editUser);

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.find((err, users) => {
    if (err) throw err;
    res.send(users);
  });
});

/* GET users listing. */
router.get('/find/:id', function (req, res, next) {
  Users.findById(req.params.id, (err, user)=> {
    if(err) throw err;
    res.send(user);
  })
});

/* 
    Adding User
    Method: POST  
*/
router.post('/addUser', function (req, res, next) {
  let user = new Users(req.body);
  Users.create(user, (err) => {
    if (err) throw err;
    res.send(user);
  });
});

/* 
    Edit User
    Method: POST  
*/
router.put('/editUser/:id', function (req, res, next) {
  Users.findById(req.params.id, (err, user) => {
    if (err) throw err;
    if (!user) res.status(404).send('User does not exists.');
    let updatedUser = user;
    updatedUser = {
      user_type: req.body.user_type,
      username: req.body.username,
      password: req.body.password,
      orders: user.orders,
    };
    Users.findByIdAndUpdate(req.params.id, updatedUser, (err) => {
      if (err) throw err;
      res.send(updatedUser);
    });
  });
});

/* 
    Delete User
    Method: Delete  
*/
router.delete('/deleteUser/:id', (req, res) => {
  Users.findById(req.params.id, (err, user) => {
    if (err) throw err;
    if (!user) res.status(404).send('User does not exists.');
  });
  Users.findByIdAndRemove(req.params.id, (err) => {
    if (err) throw err;
    res.send('User Deleted');
  });
});


// Log Out for Passport
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login')
})

module.exports = router;
