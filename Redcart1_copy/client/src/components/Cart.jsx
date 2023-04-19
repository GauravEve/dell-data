import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartPrice from './CartPrice';
import '../css/cart.css'
import CartSave from './CartSave';
import Navbar from './Navbar';
import {useDispatch,connect, useSelector} from 'react-redux';
import * as actionCreators from '../store/actions/index'
function Cart() {

  var carts=useSelector((state)=>state.carts)
  const dispatch=useDispatch();

  const addHandler=(ele)=>{

    dispatch(actionCreators.cartHandler({id:ele.id,sign:1}))
  }

  const minusHandler=(ele)=>{

    dispatch(actionCreators.cartHandler({id:ele.id,sign:-1}))
  }

  const deleteHandler=(ele)=>{

    dispatch(actionCreators.cartHandler({id:ele.id,sign:2}))
  }

  const saveForLaterHandler=(ele)=>{
    dispatch(actionCreators.cartSave(ele))
  }

  useEffect(()=>{
    dispatch(actionCreators.loadCarts())
    },[carts]);
    
    var quantity=0;
    const a=[];
    carts.map((ele,index)=>{
      a.push(
      <div className='cartProduct'>
          <img key={index} className="productImage" src={ele.image}/>
          <div className='cartDescription'>
            <p>{ele.description}</p>
            <p className='priceBold'>Rs {ele.price}</p>
            <button className='handlerBtn' onClick={()=>{minusHandler(ele)}}>-</button>
            <h5 className='quantityBtn'>{ele.quantity}</h5>
            <button className='handlerBtn' onClick={()=>{addHandler(ele)}}>+</button>
            <button className='handlerBtn' onClick={()=>{deleteHandler(ele)}}>Delete</button>
            <button className='handlerBtn' onClick={()=>{saveForLaterHandler(ele)}}>Save for later</button>
          </div>
      </div>)
        quantity=quantity+ele.quantity
      })

  return (
    <div>
    <Navbar/>
    <div className='cartGrid'>
      <div className='cartContainer'>
        <div className='cartWrapper'>
        {(a.length>0)&&<h1>My Cart ({quantity})</h1>}
          {a}
        </div>
        <div className='cartWrapper'>
          <CartSave/>
        </div>
      </div>
      <CartPrice/>
    </div>
    </div>
  )
}

export default (Cart)
