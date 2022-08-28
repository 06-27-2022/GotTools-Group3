import React from 'react';
import {Link, NavLink} from "react-router-dom";

import logo from './images/Logo1.png';



export default function Navbar() {
    return (
        


          <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow  ; ;">

            
  <div class="container-fluid">

        <div>
             <img src={logo} alt="this is logo" />
        </div>
    <a className="navbar-brand m-4" href="/"><h1 className='text-dark fw-bolder font-arial'>GotTools</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class=" h5 navbar-nav fw-bolder ">
      <div className="vr p-1"></div>
        <li class="nav-item shadow" >
          <a class="nav-link active" aria-current="page" href="/findall">Customers</a>
        </li>
        <div className="vr p-1 color-dark"></div>
        <li class="nav-item shadow">
        <a class="nav-link active" href="/invoice">Purchase Order</a>
        </li>
        <div className="vr p-1 color-dark"></div>
        <li class="nav-item shadow">
        <a class="nav-link active" href="/supplies">Supplies</a>
        </li>
        <div className="vr p-1 color-dark"></div>
        <li class="nav-item shadow">
          <a class="nav-link active" aria-current="page" href="/viewsuppliers">Suppliers</a>
             
        </li>
        
        
        <div className="vr p-1 color-dark"></div>
        <li class="nav-item shadow">
          <a class="nav-link active" aria-current="page" href="/">Inventory</a>
             
        </li>
        <div className="vr p-1 color-dark"></div>
        
      </ul>
      

    </div>

                    <NavLink className="btn btn-outline-light m-1" to="/adduser">AddUser</NavLink>
                    <NavLink className="btn btn-outline-light m-1" to="/loginpage">Login</NavLink>
  </div>

</nav>
                  
            
    )
}