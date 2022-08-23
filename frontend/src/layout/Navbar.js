import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            
  <div class="container-fluid">
    <a class="navbar-brand" href="/">GotTools</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/findall">All Users</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" href="/invoice">Purchas Order</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" href="/">Customers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">All Users</a>
          
          
        </li>
        
      </ul>
      

    </div>

      <button 
                    className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
                    <Link className="btn btn-outline-light" to="/adduser">Login</Link>
  </div>

</nav>
                  
            </div>
    )
}