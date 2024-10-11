const mongoose = require('mongoose');


const Task = mongoose.model('User', 
    {
        name: String,
        email: String,
        age: Number,


    }
);

module.exports = Task