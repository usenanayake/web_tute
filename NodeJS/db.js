const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {

if(!err)
    console.log('Mongo connection success...');
else
    console.log('Error in connection :' + JSON.stringify(err, undefined, 2));

});

module.exports = mongoose;