import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
export default function Login() {

    let navigate=useNavigate()
    let loginfo = ""

    const [login, setlogin]=useState({

      loginfo:"",

    });

    const [user, setUser]=useState({

          username:"",
          password:"",

    });

    const{username,password}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
       
    };

    const onSubmit=async(e)=>{ 
        e.preventDefault()
        await axios.post("http://localhost:8080/user/login?username=" + username +"&password="+password,user).then(result=>
            navigate("/loginsuccess")  
        ).catch(error => 
            navigate("/loginfailure")
        )
    };

    return (
    <div className='main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                            Username
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Username'
                            name="username"
                            value={username}
                            onChange={(e)=> onInputChange(e)}
                        
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Password'
                            name="password"
                            value={password}
                            onChange={(e)=> onInputChange(e)}
                        />
                        
                    </div>

                   <button type='submit' className='btn btn-outline-primary mx-2'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>  
                  </form>
                </div>
            </div>
        </div>
        </div>
    )
}