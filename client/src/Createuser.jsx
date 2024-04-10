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
    

    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(code)) {
            alert('Invalid/missing Supplier ID');
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
                    <h2 style={{ color: 'black' }}>Add New Drugs</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="code">Drug Code</label>
                        <input type="text" placeholder='DC000000' className='form-control' onChange={(e) => setCode(e.target.value.toUpperCase())} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">Drug Name</label>
                        <input type="text" placeholder='Enter drug Name' className='form-control' onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="uprice">Unit Price</label>
                        <input type="text" placeholder='10.00' className='form-control' onChange={(e) => setUprice(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="qty">Quantity</label>
                        <input type='text' placeholder='100' className='form-control' onChange={(e) => setQty(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="expdate">Expiry Date</label>
                        <input type="date" placeholder='' className='form-control' onChange={(e) => setExpdate(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-success bg-primary rounded-2'>Submit</button>
                </form>
               
            </div>
        </div>
    );
}

export default Createuser;
