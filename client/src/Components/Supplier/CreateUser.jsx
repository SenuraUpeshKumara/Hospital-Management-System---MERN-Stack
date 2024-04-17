import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateUser() {
    const [sid,setSid] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [district,setDistrict] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const navigate = useNavigate();

    const validateItemCode = (value) => {
        return /^SU\d{6}$/.test(value);
    };
    const validateSupplierName = (value) => {
        return /^[a-zA-Z\s]+$/.test(value);
    };
    const validateDistrict = (value) => {
        return /^[a-zA-Z\s]+$/.test(value);
    };
    

    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(sid)) {
            alert('Invalid/missing Supplier ID');
            return;
        }
        if (!validateSupplierName(name)) {
            alert('Invalid/missing Supplier Name');
            return;
        }

        if (contact.length !== 10 || !(/^\d+$/.test(contact))) {
            alert('Contact number must contain 10 digits');
            return;
        }

        
        if (!validateEmail(email)) {
            setEmailError('Email must be in a valid format');
            return;
        }

        axios.post("http://localhost:3001/Createsupplier", { sid,name,address,district,email,contact })
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
                    <h2 style={{ color: 'black' , fontWeight:'bold'}}>Add Supplier Information</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="sid">Supplier ID</label>
                        <input type="text" placeholder='SU000000' className='form-control' onChange={(e) => setSid(e.target.value.toUpperCase())} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">Supplier Name</label>
                        <input type='text' placeholder='Enter supplier name' className='form-control' onChange={(e) => setName(e.target.value)} required />
                            
                        
                     </div>

                    <div className='mb-2'>
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder='Street Number,City' className='form-control' onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="district">District</label>
                        <input type='text' placeholder='Enter the district' className='form-control' onChange={(e) => setDistrict(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" placeholder='sample@gmail.com' className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" placeholder='070xxxxxxx' className='form-control' onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Submit</h7></button>
                    
                </form>
               
            </div>
        </div>
    );
}

export default CreateUser;
