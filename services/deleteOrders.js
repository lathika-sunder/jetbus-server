// cron initaied bookings
const cron = require('node-cron');
const { deleteInitiatedOrdersOlderThan10Minutes } = require('./deleteService');
cron.schedule('*/10 * * * *', deleteInitiatedOrdersOlderThan10Minutes);