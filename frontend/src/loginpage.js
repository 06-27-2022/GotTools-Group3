import React from 'react';


export default function Login() {
    return (
<div class="main">
    
<div class="login-box">
<div class="vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="border border-3 border-primary"></div>
        <div class="card bg-white">
          <div class="card-body p-5">
            <form class="mb-3 mt-md-4">
              
              <p class=" mb-5">Please enter your login and password!</p>
              <div class="mb-3">
                <label for="username" class="form-label ">Username</label>
                <input type="username" class="form-control" id="username" placeholder="username"></input>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label ">Password</label>
                <input type="password" class="form-control" id="password" placeholder="*******"></input>
              </div>
              <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
              <div class="d-grid">
                <button class="btn btn-outline-dark" type="submit">Login</button>
              </div>
            </form>
            <div>
              <p class="mb-0  text-center">Don't have an account? <a href="/adduser"
                  class="text-primary fw-bold">Sign
                  Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</div>



    )}
