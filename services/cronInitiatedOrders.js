
const Booking = require('../models/bookingModel');
const cronInitiatedOrders= async (req, res) => {
   
    try {
        const thresholdTime = new Date(Date.now() - 10 * 60 * 1000); 
        await Booking.deleteMany({
            paymentStatus: 'initiated',
            createdAt: { $lt: thresholdTime }
        });
        console.log('Deleted initiated orders older than 10 minutes');
        res.status(200).send('Cron job executed successfully');
    } catch (error) {
        res.status(500).send('Error executing cron job');
    }
};

module.exports = cronInitiatedOrders;
