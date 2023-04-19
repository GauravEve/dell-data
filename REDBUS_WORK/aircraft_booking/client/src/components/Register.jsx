import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styles from '../css/register.css';

const  Register = (props) =>{
    const [user, setUser] = useState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      dob:'',
      age:'',
      gender:'',
      address:''
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
        .post("http://localhost:5000/registerUser",user)
        .then(res=>{
          setUser({
              username: '',
              password: '',
              firstname: '',
              lastname: '',
              phone: '',
              email: '',
              dob:'',
              age:'',
              gender:'',
              address:''
            });
            console.log(res);
            //push to root folder
            navigate('/home')
        })
        .catch(err=>{
            console.log("Error in adding user to db");
        })
    }

  return (
    <div>
    <h1 className="display-4 text-center">Enter your details</h1>
                <p className="lead text-center">Create new user</p>
                <hr />
<div className="container mt-0">
                
                
			<form class="login w-0 px-0 pt-0 pb-0" noValidate onSubmit={onSubmit}>
            <div className="screen ">
		<div className="screen__content ">
                     <div className="login__field">
                        <input type="text" placeholder='Enter username' name='username' value={user.username} className='login__input ' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="text" placeholder='Enter firstname' name='firstname' value={user.firstname} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="text" placeholder='Enter lastname' name='lastname' value={user.lastname} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="tel" placeholder='Enter mobile number' name='phone' value={user.phone} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="password" placeholder='Set password' name='password' value={user.password} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    </div>
                    </div>
                    <div className="screen">
		< div className="screen__content ">
                    <div className="login__field">
                        <input type="email" placeholder='Enter  email' name='email' value={user.email} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="date" placeholder='Enter  date of birth' name='dob' value={user.dob} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="number" placeholder='Enter  age' name='age' value={user.age} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="text" placeholder='Enter  gender' name='gender' value={user.gender} className='login__input' onChange={onChange}/>
                    </div>
                    <br />
                    <div className="login__field">
                        <input type="text" placeholder='Enter  address' name='address' value={user.address} className='login__input' onChange={onChange}/>
                    </div>
				<input type='submit' class="button login__submit">
				</input>	
                </div>
        </div>			

			</form>
          
			{/* <div className="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		 </div>
		
       
</div>
  )
  }
export default Register;
