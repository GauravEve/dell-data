import React, { useState } from 'react'
// {"_id":"64288397d066db7d66961e25","bid":"BUS123FA-123","username":"Sonam@199","firstname":"Sonam","lastname":"Sharma","phone":"8082649344","email":"sonam@redbus.com","dob":"2000-10-27","age":"23","gender":"Male","fid":"A-123","flight_model":"V-123","source":"Bangalore","destination":"Delhi","departure_date":"2023-04-15","arrival_date":"2023-04-15","departure_time":"8:00:00","arrival_time":"10:00:00","seat_no":"25.5D","class":"economy","duration":"2","__v":0}


function BookingDetailsCard(props) {
  const booking = props.booking
    console.log(booking)
  return (
    <>
     <div className>
            <h1>Your booking iternary</h1>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Username</tc>
                            <tc>{booking.username}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Firstname</tc>
                            <tc>{booking.firstname}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Lastname</tc>
                            <tc>{booking.lastname}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Registered mobile number</tc>
                            <tc>{booking.phone}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Date of birth</tc>
                            <tc>{booking.dob}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Gender</tc>
                            <tc>{booking.gender}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Email</tc>
                            <tc>{booking.email}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Flight model</tc>
                            <tc>{booking.flight_model}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Source</tc>
                            <tc>{booking.source}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Destination</tc>
                            <tc>{booking.destination}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='row'>
                            <tc>Departure date</tc>
                            <tc>{booking.departure_date}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Arrival date</tc>
                            <tc >{booking.arrival_date}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Departure time</tc>
                            <tc >{booking.departure_time}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Arrival time</tc>
                            <tc >{booking.arrival_time}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Duration</tc>
                            <tc >{booking.duration}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Class</tc>
                            <tc >{booking.class}</tc>
                        </th>
                    </tr>
                    <tr>
                        <th className='d-flex justify-content-between px-5' scope='col'>
                            <tc>Seat No.</tc>
                            <tc >{parseInt(booking.seat_no.slice(0,booking.seat_no.length-1))+booking.seat_no[booking.seat_no.length-1]}</tc>
                        </th>
                    </tr>
                    
                </tbody>
            </table>
        </div> 
    </>
  )
}

export default BookingDetailsCard
