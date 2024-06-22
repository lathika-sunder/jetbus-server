const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookingSchema=new Schema({
    boardingPoint:{
        type:String
    },
    endingPoint:{
        type:String
    },
    seats:{
        type:Array
    },
    date:{
        type:Date
    },
    passengers:[{
        type: Schema.Types.ObjectId,
        ref: 'Passenger' 
    }],
    paymentStatus:{
        type:String,
        enum:["initiated","completed"],
    },
    busId:{
        type:Schema.Types.ObjectId,
        ref:'Bus'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Booking=mongoose.model('Booking',bookingSchema)
module.exports=Booking