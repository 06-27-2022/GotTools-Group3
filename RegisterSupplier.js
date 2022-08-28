import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser]=useState({

          companyname:"",
          contactname:"",
          username:"",
          password:"",
          email:"",
          phonenumber:"",
          address:"",
          city:""

    });

    const{companyname,contactname,username,password,email,phonenumber,address,city}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
       
    };

    const onSubmit=async(e)=>{ 
        e.preventDefault()
        await axios.post("http://localhost:8080/supplier/new",user)
        navigate("/login")
    };

    return (
    <div className='main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='companyname' className='form-label'>
                            Company Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Company Name'
                            name="companyname"
                            value={companyname}
                            onChange={(e)=> onInputChange(e)}
                        
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='contactname' className='form-label'>
                            Contact Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Contact Name'
                            name="contactname"
                            value={contactname}
                            onChange={(e)=> onInputChange(e)}
                        
                        />
                    </div>
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
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Email'
                            name="email"
                            value={email}
                            onChange={(e)=> onInputChange(e)}
                        />
                       
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor='phonenumber' className='form-label'>
                            Phone Number
                        </lable>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Phone Number'
                            name="phonenumber"
                            value={phonenumber}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor='address' className='form-label'>
                            Address
                        </lable>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Address'
                            name="address"
                            value={address}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor='city' className='form-label'>
                            City
                        </lable>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='City'
                            name="city"
                            value={city}
                            onChange={(e)=>onInputChange(e)}
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