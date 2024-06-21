//models
const User = require('../models/userModel')
const Operator = require('../models/operatorModel')
const Bus = require('../models/busModel')
const Booking = require('../models/bookingModel')
const Passenger = require('../models/passengerModel')
const PassengerContact = require('../models/passengerContactModel')

//dummyData
const usersData = require('./usersData')
const bookingsData = require('./bookingsData')
const operatorsData = require('./operatorsData')
const busesData = require('./busesData')
const passengersData = require('./passengersData')
const passengersContactData = require('./passengersContactData')

const postData = async () => {
    try {
        console.log('Inserting users...');
        await usersData.map((user)=>User.create(user));
        console.log('Users inserted');

        console.log('Inserting bookings...');
        await bookingsData.map((booking)=>Booking.create(booking))
        console.log('Bookings inserted');

        console.log('Inserting operators...');
        await operatorsData.map((operator)=>Operator.create(operator));
        console.log('Operators inserted');

        console.log('Inserting buses...');
        await busesData.map((bus)=>Bus.create(bus));
        console.log('Buses inserted');

        console.log('Inserting passengers...');
        await passengersData.map((passenger)=>Passenger.create(passenger));
        console.log('Passengers inserted');

        console.log('Inserting passenger contacts...');
        await passengersContactData.map((passengerContact)=>PassengerContact.create(passengerContact));
        console.log('Passenger contacts inserted');
    } catch (error) {
        console.log("Error Storing Initial Data", error);
    }
}


postData()