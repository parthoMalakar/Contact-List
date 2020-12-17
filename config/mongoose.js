//requied the library
const mongoose = require('mongoose');

//connect to the connection
mongoose.connect('mongodb://localhost/contacts_list_db');

//aquire the connection(to check if it is sucessfull)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));

//up and running then print the message
db.once('open', function() {
    console.log('Successfully connected to database');
    // we're connected!
});

module.exports= db;
