const mongoose=require('mongoose')
const Schema=mongoose.Schema

const passengerSchema=new Schema({
    name:{
        type:String,
    },
    gender:{
        type:String,
        enum:["male","female"],
    },
    age:{
        type:Number,
    },
    contact:{
        type:Schema.Types.ObjectId,
        ref:'PassengerContact'
    }
})

const Passenger=mongoose.model('Passenger', passengerSchema)
module.exports=Passenger