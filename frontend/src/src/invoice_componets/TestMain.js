import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios'

const Supps = "http://localhost:8080/supplier/all";
const strItems = "http://localhost:8080/supplies/all";
const cust = "http://localhost:8080/customer/all"


export default function InTest() {

    //____________________________      
    const [supplier, setSupps] = React.useState([]);
    React.useEffect(() => {
        axios.get(Supps).then((response) => {
            setSupps(response.data);
        });
    }, []);
    //____________________________  
    const [Items, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get(strItems).then((response) => {
            setPost(response.data);
        });
    }, []);
    //____________________________  
    const [customer, setCusts] = React.useState([]);
    React.useEffect(() => {
        axios.get(cust).then((response) => {
            setCusts(response.data);
        });
    }, []);
    //____________________________  

    return (<div>
        <h1>Test Endpoints /All</h1>
        <h2>Suppliers</h2>
        {supplier.map((p) => (<p key={p.supplierid}>
            {p.companyname}
        </p>))}
        <h2>Supplies</h2>
        {Items.map((p) => (<p key={p.suppliesid}>
            {p.category}
        </p>))}
        <h2>Customers</h2>
        {customer.map((p) => (<p key={p.customerid}>
            {p.username}
        </p>))}   
    <div>
        
    </div>
    </div>

    


    );
}



