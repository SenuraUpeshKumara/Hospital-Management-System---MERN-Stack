import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateInfo() {
    const [sbid,setSbid] = useState('');
    const [bank,setBank] = useState('');
    const [accno,setAccno] = useState('');
    const [accname,setAccname] = useState('');
    const [branch,setBranch] = useState('');
    const navigate = useNavigate();


    const validateItemCode = (value) => {
        return /^SU\d{6}$/.test(value);
    };
    

    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(sbid)) {
            alert('Invalid/missing Supplier ID');
            return;
        }

        axios.post("http://localhost:3001/Createinfo", { sbid,bank,accno,accname,branch })
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
                    <h2 style={{ color: 'black'}}>Add Bank Account Details</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="sbid">Supplier ID</label>
                        <input type="text" placeholder='SU000000' className='form-control' onChange={(e) => setSbid(e.target.value.toUpperCase())} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="bank">Bank Name</label>
                        <select className='form-control' onChange={(e) => setBank(e.target.value)} required >
                            
                            <option value="HNB">Hatton National Bank</option>
                            <option value="People's">Peoples Bank</option>
                            <option value="NDB">National Development Bank</option>
                            <option value="NSB">National Savings Bank</option>
                            <option value="BOC">Bank of Ceylon</option>
                            <option value="DFCC">DFCC</option>
                            <option value="Sampath">Sampath Bank</option>
                            <option value="amana">Amana Bank</option>
                            <option value="commercial">Commercial Bank</option>
                            <option value="ntb">Nations Trust Bank</option>
                            <option value="seylan">Seylan Bank</option>
                        </select>
                     </div>

                    <div className='mb-2'>
                        <label htmlFor="accno">Bank Account Number</label>
                        <input type="text" placeholder='Enter bank account number' className='form-control' onChange={(e) => setAccno(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="accname">Account Holder's Name</label>
                        <input type='text' placeholder='Sameera Dissanayake' className='form-control' onChange={(e) => setAccname(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="branch">Branch</label>
                        <input type="text" placeholder='Enter the region' className='form-control' onChange={(e) => setBranch(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Submit</h7></button>
                    
                </form>
               
            </div>
        </div>
    );
}

export default CreateInfo;
