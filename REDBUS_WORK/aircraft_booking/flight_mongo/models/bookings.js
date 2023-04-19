const mongoose=require('mongoose');

bookings=new mongoose.Schema({
    bid:{
        type:'string',
    },
    username:{
        type:'string',
    },
    firstname:{
        type:'string'
    },
    lastname:{
        type:'string'
    },
    phone:{
        type:'string'
    },
    email:{
        type:'string',
    },
    dob:{
        type:'string',
    },
    age:{
    },
    gender:{
        type:'string'
    },
    fid:{
        type:'string',
    },
    flight_model:{
        type:'string',
    },
    source:{
        type:'string',
    },
    destination:{
        type:'string',
    },
    departure_date:{
        // type:Date
        type:'string'

    },
    arrival_date:{
        // type:Date
        type:'string'

    },
    departure_time:{
        // type:Date
        type:'string'

    },
    arrival_time:{
        // type:Date
        type:'string'

    },
    seat_no:{
        type:'string'
    },
    class: {
        type:'string'
    },
    // ticket_fare: {
    //     type: 'string'
    // },
    duration:{
    }

});

module.exports=bookings=mongoose.model('bookings',bookings);