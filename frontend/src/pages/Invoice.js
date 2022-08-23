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


