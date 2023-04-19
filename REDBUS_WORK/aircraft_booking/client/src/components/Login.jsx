import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const  Login = (props) =>{
    const [user, setUser] = useState({
      password: '',
      email: '',
    })

    const navigate = useNavigate();

    const onChange = (e) => {
        // console.log("called");
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{

      console.log(user);
        e.preventDefault();
        axios
        .put("http://localhost:5000/loginUser",user)
        .then(res=>{
          setUser({
              password: '',
              email: '',
            });
            //push to root folder
            navigate('/home')
        })
        .catch(err=>{
            console.log("Error in logging user ", err);
        })
    }

    return (
      <div>
         {/* <h3 className="display-4 text-center">Enter your details</h3> */}
      
      <div class="container">
       
      <div class="screen">
        
        <div class="screen__content">
        <p className="display-6 pt-6 text-center">LOGIN</p>
          <form class="login pt-5 "  noValidate onSubmit={onSubmit}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="email" placeholder='Enter  email' name='email' value={user.email} className='login__input' onChange={onChange}/>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" placeholder='Set password' name='password' value={user.password} className='login__input' onChange={onChange}/>
            </div>
            <input type='submit' class="button login__submit">
            </input>				
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
    </div>
)
    }
export default Login;
