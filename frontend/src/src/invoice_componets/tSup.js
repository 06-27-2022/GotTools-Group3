import React, {  useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios'

export default function TSup() {
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const [users, setUsers]=useState ([])
    useEffect (()=>{
        loadUsers();
       
    }, []);

const loadUsers=async()=>{
    const result =await axios.get("http://localhost:8080/supplier/all")
    setUsers(result.data);
 };


  const [selectedOption, setSelectedOption] = useState(null);

  return (
    
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
       
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
      <td>{user.contactname}</td>
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

  );
}