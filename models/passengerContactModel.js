const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerContactSchema = new Schema({
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    }
});

const PassengerContact = mongoose.model('PassengerContact', passengerContactSchema);

module.exports = PassengerContact;
