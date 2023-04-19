const mongoose=require('mongoose');

flights=new mongoose.Schema({
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
        type:'string'
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
        type:'string'

    },
    arrival_time:{
        type:'string'

    },
    duration:{
    }
});
module.exports=flights=mongoose.model('flights',flights);


// db.flights.insert({
//     fid: 'A-123',
//     flight_model: 'V-123',
//     source: 'Bangalore',
//     destination: 'Delhi',
//     departure_date: '2023-04-15',
//     arrival_date: '2023-04-15',
//     departure_time: '8:00:00',
//     arrival_time: '10:00:00',
//     duration: '2'
// })