const Mongoose = require('mongoose');

let userModel = Mongoose.Schema({
    username: String,
    password: String
});

let  user = Mongoose.model('user',userModel);
module.exports = user;