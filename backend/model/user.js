const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    EmailName: {
        type: String,
        required: true,
        uniquie: true
    },
    Passwort: {
        type: String,
        required: true,
    },
    confirmPasswort: {
        type: String,
        required: true,
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);