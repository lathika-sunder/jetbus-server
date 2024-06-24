
const { deleteInitiatedOrdersOlderThan10Minutes } = require('./deleteService');
const cronInitiatedOrders= async (req, res) => {
   
    try {
        await deleteInitiatedOrdersOlderThan10Minutes();
        res.status(200).send('Cron job executed successfully');
    } catch (error) {
        res.status(500).send('Error executing cron job');
    }
};

module.exports = cronInitiatedOrders;
