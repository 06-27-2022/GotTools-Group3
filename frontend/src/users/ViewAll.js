import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

export default function ViewAll() {
    const [users, setUsers]=useState ([])
    useEffect (()=>{
        loadUsers();
       
    }, []);

     const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/users")
        setUsers(result.data);
     };
  return (

    <div className='main'>
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">password</th>
      <th scope="col">email</th>
      <th scope="col">Supplier/Customer</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  
  
  <tbody>
    {users.map((user, index) => (
    <tr>
      <th scope="row" key ={index}>{index+1}</th>
      <td>{user.username}</td>
      <td>{user.password}</td>
      <td>{user.email}</td>
      <td>{user.supplier_or_customer}</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
      
    </tr> 
    ))
}
  </tbody>
</table>

        </div>
    </div></div>
  )
}
