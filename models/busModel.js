const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
    busOperatorId: {
        type:Schema.Types.ObjectId,
        ref:'Operator'
    },
    departure: String,
    arrival: String,
    ratings: Number,
    price: Number, 
    busType: {
        type: String,
        enum: ['acSleeper', 'acSemiSleeper', 'nonAcSleeper', 'nonAcSemiSleeper']
    },
    amenities: [String],
    noOfRatings: Number,
    busPhotos: [String],
    busPoints: [String],
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
