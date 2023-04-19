const express = require('express');
const router = express.Router();

const flights = require("../../models/flights");

router.put('/search_flights', async (req,res)=>{
    const src=req.body.source;
    const des=req.body.destination;
    const dep=req.body.departure_date;
    console.log(dep);
    if (!src || !des || !dep) {
        res.status(400).send({err: "Please enter all fields."});
    } else {
        const result = await flights.find({ source: src, destination: des, departure_date: dep});
        if (!res) {
            res.send('Flights not found');
        } else {
           res.send(result)
        }
    }
})

module.exports = router

