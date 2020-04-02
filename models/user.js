const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 7
    },

    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },

    password: {
        type: String,
        required: true,
        max: 1000,
        min: 6
    },

    data: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('usuarios', userSchema);