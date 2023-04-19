import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
  const email=props.email;
    console.log(props);
  return (
    <div className="App">
         <h1>Homepage</h1>
         <p>{email}</p>
          <Link to='/book_tickets'>Book your tickets from here</Link>
          
          <Link to='/booking_details' >Check your bookings</Link>
          
    <div className="main">
    </div>
  </div>
  )
}

export default Home
