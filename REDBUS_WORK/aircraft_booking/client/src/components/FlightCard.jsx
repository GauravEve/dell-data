import React from 'react'
import axios from 'axios';

import { useState } from 'react';
function FlightCard(props) {
   const  flight = props.flight;
   const [email, setEmail] = useState('');
   const [classs, setClasss] = useState('');

   const handleEmailChange = (e) => {
    setEmail(e.target.value)
   }

   const handleClassChange = (e) => {
    setClasss(e.target.value)
   }

   const onClick = (e) => {
     e.preventDefault();
         axios
         .post("http://localhost:5000/booking",{
            fid: flight.fid,
            email: email,
            classs: classs
         })
         .then(res=>{
          setEmail('')
          setClasss('')
           alert('Flight booked sucessfully')
         })
         .catch(err=>{
             console.log("Error in  booking flight  ", err);
             alert('Error in booking flight')
         })
 
   }
  return (
    <>
        <div>
        <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Flight id</tc>
                            <tc>{flight.fid}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Flight model</tc>
                            <tc>{flight.flight_model}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Source</tc>
                            <tc>{flight.source}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Destination</tc>
                            <tc>{flight.destination}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Departure date</tc>
                            <tc>{flight.departure_date}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Arrival date</tc>
                            <tc >{flight.arrival_date}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Departure time</tc>
                            <tc >{flight.departure_time}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Arrival time</tc>
                            <tc >{flight.arrival_time}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Duration</tc>
                            <tc >{flight.duration}</tc>
                        </th>
                    </tr>

                </tbody>
            </table>
            <form action="" noValidate >
            Enter your email and class to book flight
                    <div className="form-group">
                        <input type="email" placeholder='Enter your email' name='email' value={email} className='form-control' onChange={handleEmailChange}/>
                    </div>
                    <br />
                    <div className="form-group">
                    <input type="text" placeholder='Enter class(Economy or Business)' value={classs}  onChange={handleClassChange} />
                    </div>
                    <br />
            <button onClick={onClick}>Boook this flight</button>
                </form>
        </div>
    </>
  )
}

export default FlightCard