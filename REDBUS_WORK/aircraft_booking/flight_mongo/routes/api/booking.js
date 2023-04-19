
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const flights = require("../../models/flights");
const seats = require("../../models/seat");
const bookings = require("../../models/bookings");
const users = require("../../models/Passenger");
const url = "mongodb://localhost:27017/aircraft_booking";

get_bid = (user,flight)=>{
    console.log('get_bid', user.user_id,flight.fid);
    return 'BU' +user.user_id + 'F' + flight.fid;
}

get_seat_no = (classs,seat)=>{
    hm = new Map([
        [0,'A'],
        [1,'B'],
        [2,'C'],
        [3,'D'],
        [4,'E'],
        [5,'F'],
    ])
    // console.log('get_seat_no',classs,seat,seat.economy,seat.fid)
    if(classs==='economy'){
        return `${seat.economy/6+1}${hm.get(seat.economy%6)}`;
    }
    else {
    return `${seat.business/6+1}${hm.get(seat.business%6)}`;

    }
}

update_seat_count =(classs,seat)=>{
    const client = new MongoClient("mongodb://127.0.0.1:27017");

    async function run() {
    try {
        const database = client.db("aircraft_booking");
        const seats = database.collection("seats");

        console.log('update seat count',seats)
        const filter = { fid: seat.fid };
        var updateDoc;
        if(classs==='economy'){
        updateDoc = {
        $set: {
            economy: seat.economy-1
        }
        };
        }
        else {
            updateDoc = {
                $set: {
                business: seat.business-1
                }
            };
        }
        const result = await seats.updateOne(filter, updateDoc);
        console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    } finally {
        await client.close();
    }
    }
    run().catch(console.dir);
}

router.post('/booking', async (req,res)=>{
    const fid=req.body.fid;
    const user_id = req.body.user_id;
    const classs = req.body.classs;
    const seat = await seats.findOne({fid: fid })
    if (classs=='economy' && seat.economy==0 || classs=='business' && seat.business==0 ) {
        res.send(`${classs} seats not available`);
    } 
    else {
        update_seat_count(classs,seat)
        const user  = await users.findOne({user_id: user_id})
        const flight = await flights.findOne({fid:fid})
        console.log('user',user.username)
        // console.log('seats',seat)
        // console.log('flight',flight)

        const newBooking = new bookings({
            bid: get_bid(user,flight),
            user_id: user_id,
            username: user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            phone:user.phone,
            email:user.email,
            dob:user.dob,
            age:user.age,
            gender:user.gender,
            flight_model:flight.flight_model,
            source:flight.source,
            destination:flight.destination,
            departure_date:flight.departure_date,
            arrival_date:flight.arrival_date,
            departure_time:flight.departure_time,
            arrival_time:flight.arrival_time,
            seat_no:get_seat_no(classs,seat),
            class:classs,
            duration:flight.duration
        });

        await newBooking.save();
        console.log('booked')
        res.status(200).send({message: "Your booking iternary: ",newBooking}); 

    }   

})

router.put('/booking',(req,res)=>{
const email=req.body.email
console.log(email)
const booking  = bookings.find({email: email}).then(book=>res.json(book)).catch(err=>res.status(400).json({msg: "Booking not found"}))
});


router.put('/cancel_booking', async(req,res)=>{
    const bid= req.body.bid;
    // console.log(bid);
    const client = new MongoClient("mongodb://127.0.0.1:27017");

    const booking = await bookings.findOne({bid: bid});
    // console.log(booking)
    if(!booking){
        res.send('Booking not found')
    }
    const classs = booking.class
    const fid  = booking.fid
    const seat = await seats.findOne({fid: fid})
    console.log('classs',classs)
    console.log('fid',fid)
    console.log('seat',seat)

    await bookings.deleteOne({bid: bid})
    async function run() {
    try {
        const database = client.db("aircraft_booking");
        const seats = database.collection("seats");

        console.log('update seat count',seats)
        const filter = { bid: bid };
        var updateDoc;
        if(classs==='economy'){
        updateDoc = {
        $set: {
            economy: seat.economy+1
        }
        };
        }
        else {
            updateDoc = {
                $set: {
                business: seat.business+1
                }
            };
        }
        const result = await seats.updateOne(filter, updateDoc);
        console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
        res.send('Booking cancelled successfully')
    } finally {
        await client.close();
    }
    }
    run().catch(console.dir);
})
module.exports =router

// {
//     "bid":"BUID2FA-123"
//  }

// {
//     "fid":"A-123",
//     "user_id":"ID2",
//     "class":"economy"
//  }

