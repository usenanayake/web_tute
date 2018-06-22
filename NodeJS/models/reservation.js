const mongoose = require('mongoose');

var Reservation = mongoose.model('Reservation',{
    name: {type: String},
    date: {type: String},
    lab: {type: String},
    time: {type: String},
    duration: {type:Number},
    contact: {type:Number}
});

module.exports = {Reservation};
