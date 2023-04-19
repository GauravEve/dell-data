import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Login from './components/Login';
import Home from './components/Home';
import BookTickets from './components/BookTickets';
import BookingDetails from './components/BookingDetails';
import Root from './components/Root';
function App() {

  return (
    <div style={{diplay:"inline-block"}} >
      <Routes>
      <Route  path='/' element={<Root/>}></Route>
        <Route  path='/home' element={<Home/>}></Route>
        <Route  path='/register' element={<Register/>}></Route>
        <Route   path='/book_tickets' element={<BookTickets/>}></Route>
        <Route  path='/booking_details' element={<BookingDetails/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
   
  )
}

export default App