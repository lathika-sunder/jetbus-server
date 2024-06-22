const Booking = require("../models/bookingModel");
const cron = require('node-cron');
const Bus = require("../models/busModel");




const postBooking = async (request, response) => {
    const userId = request.user._id;
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
        userId: userId,
    })

    try {
        await booking.save()
        response.status(201).json({ message: "Booking Successful", booking: booking })
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error })
    }
}

const getBookingsOfUser = async (request, response) => {
    const userId = request.user._id
    try {
        const bookingsOfUser = await Booking.find({ userId: userId })
        response.status(200).json(bookingsOfUser)
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

const getBookingDetails = async (request, response) => {
    const bookingId = request.params.bookingId
    try {
        const booking = await Booking.findById(bookingId)
        if (!booking) {
            return response.status(404).json({ message: "Booking not found" });
        }
        response.status(200).json(booking)
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error.message })

    }
}

const calculateBookingCost = async (request, response) => {
    const { busId, seats } = request.body;

    try {
        const bus = await Bus.findById(busId);

        if (!bus) {
            return response.status(404).json({ message: "Bus not found" });
        }

        const busPrice = bus.price;
        let totalBusPrice = 0;

        const seatCategories = {
            "L1": 3.5, "L2": 3.5, "L6": 3.5, "L7": 3.5, "U1": 3.5, "U2": 3.5, "U6": 3.5, "U7": 3.5,
            "L3": 7.5, "L4": 7.5, "L8": 7.5, "L9": 7.5, "U3": 7.5, "U4": 7.5, "U8": 7.5, "U9": 7.5,
            "L5": 10.5, "L10": 10.5, "U5": 10.5, "U10": 10.5
        };

        for (let i = 0; i < seats.length; i++) {
            const seatCategory = seats[i];

            if (seatCategories[seatCategory]) {
                totalBusPrice += busPrice * seatCategories[seatCategory];
            } else {
                return response.status(400).json({ message: `Invalid seat category: ${seatCategory}` });
            }
        }

        return response.status(200).json(totalBusPrice );
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const cancelBooking=async(request,response)=>{
    const bookingId=request.params
    try {
        
    } catch (error) {
        
    }
}

module.exports = { postBooking, getBookingsOfUser, getBookingDetails, calculateBookingCost }