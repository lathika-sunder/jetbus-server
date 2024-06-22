const express = require('express')
const Bus = require('../models/busModel')
const postBus = async (request, response) => {
    const id=request.user._id;
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
        busOperatorId:id,
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
        response.status(201).json({ message: "Bus Posted Successfully" ,bus:bus})
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error", error: error })
    }

}
const getBuses = () => {

}
const getSeats = () => {

}
const filterBuses = () => {

}

const editBus = () => {

}
const deleteBus = () => {

}
const getBusDetails = () => {

}

module.exports = {
    getBuses,
    getSeats,
    postBus,
    editBus,
    deleteBus,
    getBusDetails,
    filterBuses
}