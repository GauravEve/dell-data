import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import BookingDetailsCard from './BookingDetailsCard';

const  BookingDetails = (props) =>{
    const [email, setEmail] = useState('');
    const [booking_res, setBooking_res] = useState([]);

    const navigate = useNavigate();

    const onChange = (e) => {
        // console.log("called");
        setEmail(e.target.value)
    }

  
    const onSubmit = (e) =>{
      console.log(email);
        e.preventDefault();
        axios
        .put("http://localhost:5000/booking",{email})
        .then(res=>{
            setEmail('');
            setBooking_res(res.data)
            console.log((res.data));
            
        })
        .catch(err=>{
            console.log("Error in retreiving bookings from db ", err);
        })
    }

  return (
      <div className>
        <div className="row">
            <div className="cold-md-8-auto">
                <h1 className="display-4 text-center">Enter your email to fetch your booking details</h1>
                <hr />
                <form action="" noValidate onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" placeholder='' name='email' value={email} className='form-control' onChange={onChange}/>
                    </div>
                    <br />
                    <input type="submit" className='btn btn-outline-warning btn-block mt-4' />
                </form>
            </div>
        </div>
        <div className="row">
            {booking_res.map(booking=>{
                return <BookingDetailsCard booking={booking} />;
            })}
        </div>
      </div>
  )
}

export default BookingDetails
