import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link,useNavigate } from 'react-router-dom';

export default function ViewAll() {
    const [users, setUsers]=useState ([])
    useEffect (()=>{
        loadUsers();
       
    }, []);

     const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/supplies/all")
        setUsers(result.data);
     };

     const [itemCount, setItemCount] = React.useState(1);

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
      <th scope="col">Review</th>
      
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
      <td>{user.reviewscore}</td>
      <td>
      <div>
      <h6>Add to Cart</h6>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button className="btn btn-primary mx-2"
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
      </td>
      
    </tr> 
    ))
}
  </tbody>
</table>
      <Link type='submit' className='btn btn-outline-primary mx-2' to="/invoice">Checkout</Link>
    </div>
    </div>
    </div>
    
  )
} 
