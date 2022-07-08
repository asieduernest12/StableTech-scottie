const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({


    
    visitDay: {
        type: String,
        required: true
    },
    visitMonth: {
        type: String,
        required: true
    },
    
    visitYear: {
        type: String,
        required: true
    },
    visitReason:{
        type: String,
        required: true
    },
    horseName:{
        type: String,
        required: true
    },
    ownerName:{
        type: String,
        required: true
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // }
},

  )

const Schedule = model('Schedule', scheduleSchema)
module.exports = Schedule