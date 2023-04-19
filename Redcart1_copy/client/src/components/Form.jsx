import React, { useEffect } from 'react'
import "../css/form.css"
import * as actionCreators from '../store/actions/index'
import {useDispatch, useSelector} from 'react-redux';
import $ from 'jquery';

function Form() {
  const dispatch=useDispatch();
  var products=useSelector((state)=>state.products)

  useEffect(()=>{
    $('input[type=checkbox]').prop('checked',false);
    $('input[type=radio]').prop('checked',false);
  },[products])
  

  const type=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectType(sign))
    else
        dispatch(actionCreators.removeType(sign))

  }

  const brand=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectBrand(sign))
    else
        dispatch(actionCreators.removeBrand(sign))

  }

  const size=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectSize(sign))
    else
        dispatch(actionCreators.removeSize(sign))

  }
  

  const sortFn=(ele)=>{
    dispatch(actionCreators.sortFn(ele))
  }

  const removeFn=()=>{
    dispatch(actionCreators.remove())
    
  }

  return (
    <div className="formContainer">
        <form id="form1"className='form'>
            <div className="ideal">
                <h5>Filters</h5>
                <h6>Ideal for:</h6>
                <input type='checkbox' id="men" name="men" onClick={(e)=>type(e,"men")}/>
                    <label className='label'>Men</label>
                <input type='checkbox' className='ms-3' id="women" name="women" onClick={(e)=>type(e,"women")}/>
                    <label className='label'>Women</label>
            </div>
            <div className="brand">
                <h6>Brand</h6>
                <input type='checkbox' id="nike" name="nike" onClick={(e)=>brand(e,"nike")}/>
                    <label label className='label'>Nike</label>
                <input type='checkbox' className='ms-3' id="casio" name="casio" onClick={(e)=>brand(e,"casio")}/>
                    <label label className='label'>Casio</label>
                <input type='checkbox' className='ms-3' id="peterEngland" name="peterEngland" onClick={(e)=>brand(e,"peter england")}/>
                    <label label className='label'>Peter England</label>
            </div>
            <div className="sizes">
                <h6>Sizes</h6>
                <input type='checkbox' id="S" name="S" onClick={(e)=>size(e,"S")}/>
                    <label label className='label'>S</label>
                <input type='checkbox' className='ms-3' id="M" name="M" onClick={(e)=>size(e,"M")}/>
                    <label label className='label'>M</label>
                <input type='checkbox' className='ms-3' id="L" name="L" onClick={(e)=>size(e,"L")}/>
                    <label label className='label'>L</label>
                <input type='checkbox' className='ms-3' id="XL" name="XL" onClick={(e)=>size(e,"XL")}/>
                    <label label className='label'>XL</label>
            </div>
            <div className="sortby">
                <h5>Sort By:</h5>
                <input type='radio' id="lowToHigh" name="lowToHigh" onClick={()=>sortFn("Inc")}/>
                    <label label className='label'>Price low to high</label>
                <input type='radio' className='ms-3' id="highToLow" name="lowToHigh" onClick={()=>sortFn("Dec")}/>
                    <label label className='label'>Price high to low</label>
            </div>
            <input className="filterBtn" type='reset' value="Clear Filter" onClick={()=>removeFn()}></input>
        </form>
    </div>
  )
}

export default Form