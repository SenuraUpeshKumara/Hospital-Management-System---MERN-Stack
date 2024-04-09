import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Createuser() {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [uprice, setUprice] = useState('');
    const [qty, setQty] = useState('');
    const [expdate, setExpdate] = useState('');
    const navigate = useNavigate();

    const validateItemCode = (value) => {
        return /^DC\d{6}$/.test(value);
    };
    

    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(code)) {
            alert('Invalid item code');
            return;
        }

        axios.post("http://localhost:3001/Createuser", { code, name, uprice, qty, expdate })
            .then(result => {
                console.log(result);
                toast.success('New record created successfully');
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Submit}>
                    <h2 style={{ color: 'black' }}>Add items to inventory</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="code">Item Code</label>
                        <input type="text" placeholder='DC000000' className='form-control' onChange={(e) => setCode(e.target.value.toUpperCase())} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">Item Name</label>
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
                        <label htmlFor="expdate">Expiration Date</label>
                        <input type="date" className='form-control' onChange={(e) => setExpdate(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-success bg-primary rounded-2'>Submit</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Createuser;
