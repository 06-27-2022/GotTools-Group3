import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ViewAll() {
    const [users, setUsers]=useState ([])
    useEffect (()=>{
        loadUsers();
       
    }, []);

     const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/supplies/all")
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
      <th scope="col">Category</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Rating</th>
      <th scope="col">Picture</th>
      <th scope="col">Supplier</th>
      
    </tr>
  </thead>
  
  
  <tbody>
    {users.map((user, index) => (
    <tr>
      <th scope="row" key ={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.category}</td>
      <td>{user.quantity}</td>
      <td>{user.price}</td>
      <td>{user.description}</td>
      <td>{user.rating}</td>
      <td>{user.picture}</td>
      <td>{user.supplier}</td>
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
