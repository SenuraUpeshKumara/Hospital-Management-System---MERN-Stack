import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {

    const {id} = useParams();
    const [sid, setSid] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
   
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getSupplier/' + id)
            .then(result => {console.log(result)

                setSid(result.data.sid)
                setName(result.data.name)
                setAddress(result.data.address)
                setDistrict(result.data.district)
                setEmail(result.data.email)
                setContact(result.data.contact)
            })
            .catch(err => console.log(err));
    }, [])

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

    const Update = (e) => {
        e.preventDefault();

        axios.put("http://localhost:3001/updateSupplier/"+id, { sid, name, address, district, email,contact })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
            
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
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Update}>
                <h2 style={{ color: 'black'}}>Update Supplier Information</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="sid">Supplier ID</label>
                        <input type="text" placeholder='SU000000' className='form-control' value={sid} onChange={(e) => setSid(e.target.value.toUpperCase())} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">Supplier Name</label>
                        <input type='text' placeholder='Enter supplier name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
                            
                        
                     </div>

                    <div className='mb-2'>
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder='Street Number,City' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="district">District</label>
                        <input type='text' placeholder='Enter the district' className='form-control' value={district} onChange={(e) => setDistrict(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" placeholder='sample@gmail.com' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" placeholder='070xxxxxxx' className='form-control' value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Update</h7></button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
