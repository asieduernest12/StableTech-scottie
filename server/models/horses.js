const mongoose = require('mongoose');
const horseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    ownerName: {
        type: String,
        required: true
    },
    ownerPhone: {
        type: String,
        required: true
    },
    feed: {
        type: String,
        require: true
    }, 
    vaccineDate: {
        type: Date,
        required: true
    },
    shoeDate: {
        type: Date,
        required: true
    },
    barnName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Horses", horseSchema);
