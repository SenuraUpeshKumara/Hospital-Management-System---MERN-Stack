import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Createuser() {
    const [code,setCode] = useState('');
    const [name,setName] = useState('');
    const [uprice,setUprice] = useState('');
    const [qty,setQty] = useState('');
    const [expdate,setExpdate] = useState('');
    
    const navigate = useNavigate();

    const validateItemCode = (value) => {
        return /^DC\d{6}$/.test(value);
    };
    const validateDrugName = (value) => {
        return /^[a-zA-Z]+$/.test(value.trim());
    };
    
    const validateUnitPrice = (value) => {
        return /^\d+(\.\d{2})?$/.test(value);
    };
    
    const validateQuantity = (value) => {
        return /^[1-9]\d*$/.test(value);
    };

    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(code)) {
            alert('Invalid/missing Supplier ID');
            return;
        }
        if (!validateDrugName(name)) {
            alert('Invalid/missing Drug Name');
            return;
        }

        if (!validateUnitPrice(uprice)) {
            alert('Invalid Unit Price');
            return;
        }

        if (!validateQuantity(qty)) {
            alert('Invalid Quantity');
            return;
        }

        axios.post("http://localhost:3001/CreateUser", { code,name,uprice,qty,expdate })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Submit}>
                    <h2 style={{ color: 'black' ,fontWeight: 'bold'}}>Add New Drugs</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="code"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Drug Code</h7></label>
                        <input type="text" placeholder='DC000000' className='form-control' onChange={(e) => setCode(e.target.value.toUpperCase())} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Drug Name</h7></label>
                        <input type="text" placeholder='Enter drug Name' className='form-control' onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="uprice"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Unit Price</h7></label>
                        <input type="text" placeholder='10.00' className='form-control' onChange={(e) => setUprice(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="qty"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Quantity</h7></label>
                        <input type='text' placeholder='100' className='form-control' onChange={(e) => setQty(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="expdate"><h7 style={{ color: 'black' ,fontWeight: 'bold'}}>Expiry Date</h7></label>
                        <input type="date" placeholder='' className='form-control' onChange={(e) => setExpdate(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Submit</h7></button>
                  
                </form>
               
            </div>
        </div>
    );
}

export default Createuser;
