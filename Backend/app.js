var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var User = require('./models/usersModel');

// Imports for Authentication
var passport = require('passport');
var LocalStrategy = require('passport-local');
passportLocalMongoose = require('passport-local-mongoose');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');
var adminRouter = require('./routes/admin');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/checkout');


var app = express();

//Creating mongoose connection
mongoose
  .connect('mongodb://localhost:27017/shop24x7', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Databse!!'))
  .catch((er) => console.log(er));
  
// Encode or Decode the Session Objects
app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2 * 60 * 1000
  }
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));

app.use(passport.initialize());
app.use(passport.session());

//current User
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
})
//MIDDLEWARE
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Allow CORS to All Routes
//app.use(cors());
// All CORS to Specific Routes
var corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/admin', adminRouter);
app.use('/products', productsRouter);
app.use('/checkout', ordersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
