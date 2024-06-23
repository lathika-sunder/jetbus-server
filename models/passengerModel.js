const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "non-binary", "prefer not to say"],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    }
});

const Passenger = mongoose.model('Passenger', passengerSchema);
module.exports = Passenger;
