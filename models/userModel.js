const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: String,
    phone: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
