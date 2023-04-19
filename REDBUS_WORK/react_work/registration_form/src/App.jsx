import './App.css'
import { useState } from 'react'
// import RegistrationForm from './components/RegistrationForm'

// const formValid=({isError,...rest})=>{
//   let isValid=false;
//   Object.values(isError).forEach(val=>{
//     if(val.length>0){
//       isValid=flase;
//     }else{
//       isValid=true
//     }
//   })
//   Object.values(rest).forEach(val=>{
//     if(val.length==null){
//       isValid=flase;
//     }else{
//       isValid=true
//     }
//   })
//   return isValid;
// }
function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contactno,setContactno]=useState("");
  const [Age,setAge]=useState("");
  
  const nameHandler=(e)=>{
    setName(e.target.event);
  }
  const emailHandler=(e)=>{
    setEmail(e.target.event);
  }
  const contactnoHandler=(e)=>{
    setContactno(e.target.event);
  }
  const ageHandler=(e)=>{
    setAge(e.target.event);
  }

//   const regExp=RegExp(/^[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z]/)

// var props={
//   name:'',
//   email:'',
//   password:'',
//   isError:{
//     name:'',
//   email:'',
//   password:'',
//   }
// }

// function onSubmit(e){
//   e.preventDefault();
//   if(formValid(props)){
//     console.log(props);
//   }else{
//     console.log("form is invalid");
//   }
// }

// function formValChange(e){
//   e.preventDefault();
//   const{name,value}=e.target;
//   let isError={...props.isError};
//   switch(name){
//     case 'name':
//       isError.name=value.length<4?"Name requires atleast 4 characters":"Empty";
//       break;
//     case 'email':
//       isError.email=regExp.test(value)?"Empty":"Email is invalid";
//       break;
//     case 'password':
//       isError.name=value.length<8?"password requires atleast 8 characters":"Empty";
//       break;
//     default:
//       break;
//   }
//   setName(value);
// }

//   var isError=props;
  return (
    <div className="form-bg">
      <h1 style={{textAlign:'center'}}>Registraion form</h1>
        <form className='body1' typeof='submit' >
          <label>Name:</label>
          <input type='text' placeholder='Enter Your Name' onChange={nameHandler} />
          <label>Email:</label>
          <input type='email' placeholder='Enter Your Email' onChange={emailHandler}/>
          <label>Contact No:</label>
          <input type='Number' placeholder='Enter Your Contact Number' onChange={contactnoHandler}/>
          <label>Age:</label>
          <input type='Number' placeholder='Enter Your Age' onChange={ageHandler}/>
          <button>Submit</button>
        </form>
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-secondary btn-floating mx-1">
    <i class="fa fa-facebook" aria-hidden="true"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-google" aria-hidden="true"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fa fa-github" aria-hidden="true"></i>
    </button>
  </div>
    </div>
  )
}

export default App
