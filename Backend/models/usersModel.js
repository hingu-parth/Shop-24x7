const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  phone: Number,
  address: String,
  user_type: String,
  orders: [],
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Users', userSchema);
