const mongoose = require('mongoose');

var Login = mongoose.model('Login',{
    name: {type: String},
    email: {type: String},
    password: {type: String}
   
});

module.exports = {Login};
