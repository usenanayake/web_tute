const mongoose = require('mongoose');

var Lab = mongoose.model('Lab',{
    name: {type: String},
    lab: {type: String},
    date: {type: String},
    time: {type:String}
});

module.exports = {Lab};
