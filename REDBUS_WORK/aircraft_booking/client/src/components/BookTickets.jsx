import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import FlightCard from './FlightCard';

const  BookTickets = (props) =>{
    const [flight, setflight] = useState({
      source:'',
      destination:'',
      departure_date:''
    })
    const [flight_res, setFlight_res] = useState([])


    const navigate = useNavigate();

    const onChange = (e) => {
        // console.log("called");
        setflight({...flight, [e.target.name]: e.target.value.toString()})
    }

    
    const onSubmit = (e) =>{
      console.log(flight.departure_date);
        e.preventDefault();
        axios
        .put("http://localhost:5000/search_flights",flight)
        .then(res=>{
          setflight({
              source: '',
              destination: '',
              departure_date: ''
            });
            //push to root folder
            // navigate('/home')
            console.log(JSON.stringify(res));
            setFlight_res(res.data);
        })
        .catch(err=>{
            console.log("Error in retreiving flights from db ", err);
        })
    }

  return (
    <div>
    <div class="container">
       
    <div class="screen">
      
      <div class="screen__content">
      <p className="display-6 pt-6 text-center">Search Flights</p>
        <form class="login pt-5 "  noValidate onSubmit={onSubmit}>
                    <div className="login__field">
                        <input type="text" placeholder='Enter  source' name='source' value={flight.source} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="text" placeholder='Enter destination' name='destination' value={flight.destination} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="date" placeholder='Enter departure_date' name='departure_date' value={flight.departure_date} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <input type="submit" className='btn btn-outline-warning btn-block mt-4' />
                </form>
            </div>
            <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>		
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
        </div>
        </div>
            <div className="mx-5 my-5">
                {
                    flight_res.map((f)=><FlightCard flight={f} />)
                }
            </div>
            </div>  
  )
}

export default BookTickets
