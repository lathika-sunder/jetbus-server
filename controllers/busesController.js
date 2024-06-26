const express = require('express')
const Bus = require('../models/busModel');
const Booking = require('../models/bookingModel');
const postBus = async (request, response) => {
    const id = request.user._id;
    const {
        departure,
        arrival,
        price,
        busType,
        amenities,
        noOfRatings,
        busPhotos,
        busPoints
    } = request.body;

    const bus = new Bus({
        busOperatorId: id,
        departure,
        arrival,
        price,
        busType,
        amenities,
        noOfRatings,
        busPhotos,
        busPoints
    })
    try {
        await bus.save()
        response.status(201).json({ message: "Bus Posted Successfully", bus: bus })
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error })
    }

}
const getBuses = async (request, response) => {
    const { arrival, departure } = request.body
    
    try {
        const result = await Bus.find({
            $or: [
                { departure: departure },
                { busPoints: { $in: [departure] } }
            ],
            $or: [
                { arrival:arrival },
                { busPoints: { $in: [arrival] } }
            ]
        });
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({ message: "Error getting Buses", error: error.message })
    }
}
const getSeats = async (request, response) => {
    const { busId, date } = request.body;
    const seats = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "U10"];

    try {
        const bookedSeats = await Booking.find({ date: date, busId: busId });

        if (bookedSeats.length === 0) {
            return response.status(404).json({ message: "No Bookings Found" });
        }

        const bookedSeatIds = bookedSeats.reduce((acc, booking) => acc.concat(booking.seats), []);

        const seatsResult = seats.map(seat => ({
            seat,
            status: bookedSeatIds.includes(seat) ? "Booked" : "Not Booked"
        }));

        response.status(200).json(seatsResult);
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};



const getBusDetails =async (request,response) => {
    const busId=request.params.busId

    try {
        const bus=await Bus.findById(busId)
        response.status(200).json(bus)
    } catch (error) {
        response.status(500).json({message:"Error getting Bus Details",error:error.message})
    }
}

const getAllBuses=async(request,response)=>{
    try {
        const buses=await Bus.find()
        response.status(200).json(buses)
    } catch (error) {
        response.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

module.exports = {
    getBuses,
    getSeats,
    postBus,
    getAllBuses,
    getBusDetails
}