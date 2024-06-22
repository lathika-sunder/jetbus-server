const Booking = require("../models/bookingModel");


async function deleteInitiatedOrdersOlderThan10Minutes() {
    try {
        const thresholdTime = new Date(Date.now() - 10 * 60 * 1000); // 10 minutes ago
        await Booking.deleteMany({
            paymentStatus: 'initiated',
            createdAt: { $lt: thresholdTime }
        });
        console.log('Deleted initiated orders older than 10 minutes');
    } catch (error) {
        console.error('Error deleting orders:', error);
    }
}

module.exports = {
    deleteInitiatedOrdersOlderThan10Minutes
};
