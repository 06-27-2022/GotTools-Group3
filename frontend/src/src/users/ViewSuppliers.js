import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ViewSuppliers() {
    const [users, setUsers]=useState ([])
    useEffect (()=>{
        loadUsers();
       
    }, []);

     const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/supplier/all")
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
      <th scope="col">Company Name</th>
      <th scope="col">Contact Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      
    </tr>
  </thead>
  
  
  <tbody>
    {users.map((user, index) => (
    <tr>
      <th scope="row" key ={index}>{index+1}</th>
      <td>{user.companyname}</td>
      <td>{user.contactname}</td>
      <td>{user.email}</td>
      <td>{user.phonenumber}</td>
      <td>

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
