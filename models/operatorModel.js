const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busOperatorSchema = new Schema({
   
    name: String,
    gstId: String,
    ownerName: String,
    email: String,
    mobile: String,
    address: String,
});

const BusOperator = mongoose.model('BusOperator', busOperatorSchema);

module.exports = BusOperator;
