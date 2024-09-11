const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.once('open', function(){
    console.log('connection has been made, thank you elizabeth');
    
}).on('error', function(error){
    console.log('connection failed');
});