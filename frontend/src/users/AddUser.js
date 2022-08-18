import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser]=useState({

          username:"",
          password:"",
          email:"",
          supplier_or_customer:"",

    });

    const{username,password,email,supplier_or_customer}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
       
    };

    const onSubmit=async(e)=>{ 
        e.preventDefault()
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter Name'
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
                            placeholder='password'
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
                            placeholder='email'
                            name="email"
                            value={email}
                            onChange={(e)=> onInputChange(e)}
                        />
                       
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='supplier_or_customer' className='form-label'>
                            Supplier Or Customer
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='changes made'
                            name="supplier_or_customer"
                            value={supplier_or_customer}
                            onChange={(e)=> onInputChange(e)}
                        />
                        
                    </div>
                <button type='submit' className='btn btn-outline-primary mx-2'>Submit</button>
                <button type='submit' className='btn btn-outline-danger mx-2'>Submit</button>  
                  </form>
                </div>
            </div>
        </div>
    )
}
