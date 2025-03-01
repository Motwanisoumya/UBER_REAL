const mongoose = require('mongoose');

function connectoDB() {
    console.log('connecting to db');
    mongoose.connect(process.env.DB_CONNECT 
    ).then(() => {
        console.log('Connected to the database');
    }).catch(err => console.log(err));
}

module.exports = connectoDB;