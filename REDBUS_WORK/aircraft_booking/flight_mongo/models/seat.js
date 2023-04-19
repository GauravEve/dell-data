const mongoose = require('mongoose')

seats = new mongoose.Schema({
    fid:{
        type: 'string'
    },
    economy:{
        type: Number
    },
    business:{
        type: Number
    }
})

module.exports = seats = mongoose.model('seats',seats)