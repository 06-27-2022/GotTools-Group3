import React from 'react';
import logo from './images/Logo1.png';

export default function Invoice() {
const handlePrint =() => {
 window.print()


 

}
    return (

  <div className='main'>
  <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-info m-1" onClick={handlePrint}> Print</button> 
        <button type="button" class="btn btn-info m-1 bg-info" onClick={handlePrint}> Download</button> 
        <button type="button" class="btn btn-info m-1 bg-info" onClick={handlePrint}> Send</button> 
  </div>
             

          <div className='container'>
          <div className='row'>
          <div className='col-md-8 offset-md-3 border rounded p-4 mt-5 shadow'>

        <div className="row">
        <div className="col  text-start fw-bolder ">
             <img src={logo} alt="this is logp" />
       </div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-5 text-info">Purchase Order</h1>
            <div className="card"></div>
        </div>
<div class="container">
  <div className="row">
    
    <div className="col  text-end fw-bolder ">
      <h3>Supplier</h3>
      
      <p>Address:</p>
      <p>Email:</p>
    </div>
    
    <div className="col text-start">
      <h3>SP Lookup</h3>
      
      <p>Address</p>
      <p>Email</p>
    </div>

    <div className="vr p-1"></div>
    
    <div className="col">
    <h3>Customer</h3>
      
      <p>Address:</p>
      <p>Address:</p>
    </div>
   
    <div className="col text-start">
      <h3> CS AutoGen</h3>
      
      <p>Address</p>
      <p>Address</p>
    </div>
  </div>
</div>
            <div className="card"></div>
  <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col">ItemID#</th>
      <th scope="col">Description</th>
      <th scope="col">Quanity</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
      <th scope="col">Picture</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>Lumber</td>
      <td>15</td>
      <td></td>
      <td>650.00</td>
      <td><img src={logo} alt="this is logp" /></td>
    </tr>
    <tr>
      <th >2</th>
      <td>Sheetrock</td>

      <td>5</td>
      <td></td>
      <td>265.00</td>
      <td><img src={logo} alt="this is logp" /></td>
    </tr>
    <tr>
      <th >2</th>
      <td>Sheetrock</td>

      <td>5</td>
      <td></td>
      <td>265.00</td>
      <td><img src={logo} alt="this is logp" /></td>
    </tr>
    
    <tr>
      <th ></th>
      <th ></th>
      <th ></th>
      
      <th ><h3>Total</h3></th>
      <th ><h3>915.00</h3></th>
      <td>.</td>
    </tr>

  </tbody>
</table>
  
           

       
          </div>
          </div>
          </div>
        </div>
    )
}


