const Booking = require("../models/bookingModel");
const cron=require('node-cron')




const postBooking = async (request, response) => {
    const userId=request.user._id;
    const {
        boardingPoint,
        endingPoint,
        seats,
        date,
        passengers,
        paymentStatus,
        busId,
       } = request.body;

    const booking = new Booking({
        boardingPoint,
        endingPoint,
        seats,
        date,
        passengers,
        paymentStatus,
        busId,
        userId:userId,
    })

    try {
        await booking.save()
        response.status(201).json({message:"Booking Successful",booking:booking})
    } catch (error) {
        response.status(500).json({message:"Internal Server Error",error:error})
    }
}

const getBookingsOfUser=async(request,response)=>{
    const userId=request.user._id
    try {
        const bookingsOfUser=await Booking.find({userId:userId})
        response.status(200).json(bookingsOfUser)
    } catch (error) {
        response.status(500).json({message:"Internal Server Error",error:error.message})
    }
}
module.exports = {postBooking,getBookingsOfUser}