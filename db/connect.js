const mongoose = require("mongoose")
const config = require('../config/config')
const DB_URI = config.db.uri

mongoose.connect(DB_URI).then(() => {
    console.log("Database connected ")
}).catch((error) => {
    console.log("Error connecting to Database")
})

module.exports = mongoose.connection