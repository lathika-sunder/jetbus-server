const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        require: true
    }
    ,
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password: { type: String, require: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
