import React from 'react';


export default function Invoice() {
const handlePrint =() => {
 window.print()

}
    return (

        <main>
          

          <div className='container'>
          <div className='row'>
                <div className='col-md-12  border rounded p-4 mt-5 shadow'>
            <h1>Purchase Order</h1>
       <ul>
        <li><button onClick={handlePrint}> Print</button> </li>
        <li><button> download</button> </li>
        <li><button> send</button> </li>
       </ul>
        <section>
        <input type="text" name="text" id="text"
        placeholder='Enter your name ' required/>
        <h2>_________</h2>



        </section>

          </div>
          </div>
          </div>
        </main>
    )
}

export default function ViewAll() {
  const [users, setUsers]=useState ([])
  useEffect (()=>{
      loadUsers();
     
  }, []);

   const loadUsers=async()=>{
      const result =await axios.get("http://localhost:8080/invoice/all")
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
    <th scope="col">Total</th>
    <th scope="col">Supplies</th>
    <th scope="col">Customer</th>
    <th scope="col">Supplier</th>
    
  </tr>
</thead>


<tbody>
  {users.map((user, index) => (
  <tr>
    <th scope="row" key ={index}>{index+1}</th>
    <td>{user.total}</td>
    <td>{user.supplies}</td>
    <td>{user.customer}</td>
    <td>{user.supplier}</td>
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


