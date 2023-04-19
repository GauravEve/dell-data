import { useState } from 'react'
import './App.css'
import {Routes,Route,NavLink as Link,useParams, useNavigate} from 'react-router-dom';
import RouteAsObj from './components/RouteAsObj';
import Search from './components/Search';
// import DashBoard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='dashboard' activeClassName="active" end>Dashboard</Link>
          </li>
          <li>
            <Link to='/' activeClassName="active" end>Home</Link>
          </li>
          <li>
            <Link to='about'activeClassName="active" end>About</Link>
          </li>
          <li>
            <Link to='/object_route'activeClassName="active">Route As Object</Link>
          </li>
          <li>
            <Link to='/object_search'activeClassName="active">Link to Search</Link>
          </li>
        </ul>
      </nav>
      <div className='main'>
        {/*define all the routes*/}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='dashboard/*' element={<DashBoard/>}></Route>
          <Route path='object_route/*' element={<RouteAsObj/>}></Route>
          <Route path='/object_search' element={<Search/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home=()=>{
  return(
    <div>You are in Home Page</div>
  );
}
export const About=()=>{
  return(
    <div>You are in About Page</div>
  );
}
export const NotFound=()=>{
  return(
    <div>This is a 404 page</div>
  );
}
export const DashBoard=()=>{
  return (
    <div className>
        <ul>
          <li>
            <Link to='' activeClassName="active" end>Profile</Link>
          </li>
          <li>
            <Link to='orders' activeClassName="active" end>Orders</Link>
          </li>
          <li>
            <Link to='quotes'activeClassName="active" end>Quotes</Link>
          </li>
        </ul>
      <div className='dashboard'>
      <Routes>
      <Route path='/' element={<Profile/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='quotes' element={<Quotes/>}></Route>
        <Route path='order_details/:orderId' element={<OrderDetails/>}></Route>
      </Routes>
        </div>
    </div>
  );
}

export const Profile=()=>{
  return(
    <div>Profile</div>
  );
}
export const Orders=()=>{
  const orderIds=["1001","1002","1003","1004"]
  return(
    <>
    <h2>Orders</h2>
    <ul className="orders">
      {/*Loop through orders array and display link to order details*/}
      {orderIds.map(orderId=>{
        return(
          <li key={orderId}>
            <Link to={`/dashboard/order_details/${orderId}`}>
              View Order {orderId};
            </Link>
          </li>
        )
      })}
    </ul>
    </>
  );
}

export const OrderDetails=()=>{
  const params=useParams();
  const navigate=useNavigate();
  const onBackClick=(e)=>{
    e.preventDefault();
    //navigate(-1)
    navigate("/dashboard/orders")
  }
  return (<><h2>Details of {params.orderId}</h2>
  <a href='#' onClick={onBackClick}>
    Back to Orders
  </a></>)
}
export const Quotes=()=>{
  return(
    <div>Quotes</div>
  );
}
export default App 
