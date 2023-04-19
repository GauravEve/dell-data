import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Student() {
    const [user,setUser]=useState({
        username:'',
        password:'',
        usertype:"Student"
    });
    
    const navigate=useNavigate();
    
    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    

    const onSubmit=(e)=>{
      console.log(user);

        e.preventDefault()
            axios.post('http://localhost:5000/registerStudent',user)
            .then((res)=>{
                setUser({
                username:'',
                password:'',
                usertype:'Student'
            })
            alert("Signup successful");
            console.log(res);
            
            }
            )
            .catch(err=>{
                console.log("Unable to signup");
            })

       
    
    }

    const onSubmit1=(e)=>{
        console.log(user);
            
          e.preventDefault()
              axios.put('http://localhost:5000/loginStudent',user)
              .then((res)=>{
                  setUser({
                  username:'',
                  password:'',
                  usertype:'Student'
              })
              alert("login successful");
            //   console.log(res);
              
              }
              )
              .catch(err=>{
                  console.log("Unable to login");
              })
              navigate('/')
         
      
      }
  return (
    <div className="container login-container">
            <div className="row">
                <form className="col-md-6 login-form-1" onSubmit={onSubmit}>
                    <h3>Signup</h3>
                    
                        <div className="form-group py-2">
                            <input type="text" className="form-control" placeholder="Your Username *"  name="username" onChange={onChange}/>
                        </div>
                        <div className="form-group py-2">
                            <input type="password" className="form-control" placeholder="Your Password *" name="password" onChange={onChange}/>
                        </div>
                        <div className="form-group py-2">
                            <input type="submit" className="btnSubmit" value="Signup" />
                        </div>
                       
                    
                </form>
                <form className="col-md-6 login-form-2" onSubmit={onSubmit1}>
                    
                    <h3>Login</h3>
                        <div className="form-group py-2">
                            <input type="text" className="form-control" placeholder="Your Email *"  name="username" onChange={onChange}/>
                        </div>
                        <div className="form-group py-2">
                            <input type="password" className="form-control" placeholder="Your Password *"  name="password" onChange={onChange} />
                        </div>
                        <div className="form-group py-2">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        
                    </form>
                </div>
            </div>
    

  )
}

export default Student