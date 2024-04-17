import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateInfo() {

    const {id} = useParams();
    const [sbid, setSbid] = useState('');
    const [bank, setBank] = useState('');
    const [accno, setAccno] = useState('');
    const [accname, setAccname] = useState('');
    const [branch, setBranch] = useState('');
    const navigate = useNavigate();

    

    useEffect(() => {
        axios.get('http://localhost:3001/getInfo/' + id)
            .then(result => {console.log(result)

                setSbid(result.data.sbid)
                setBank(result.data.bank)
                setAccno(result.data.accno)
                setAccname(result.data.accname)
                setBranch(result.data.branch)
            })
            .catch(err => console.log(err));
    }, [])

    const Update = (e) => {
        e.preventDefault();

        axios.put("http://localhost:3001/updateInfo/"+id, { sbid, bank, accno, accname, branch })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Update}>
                    <h2>Update Supplier Bank Details</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="sbid">Supplier ID</label>
                        <input type="text" placeholder='SU000000' className='form-control' value={sbid} onChange={(e) => setSbid(e.target.value.toUpperCase())} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="bank">Bank Name</label>
                        <input type="text" placeholder='Enter bank name' className='form-control' value={bank} onChange={(e) => setBank(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="accno">Bank Account Number</label>
                        <input type="text" placeholder='Enter bank account number' className='form-control' value={accno} onChange={(e) => setAccno(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="accname">Account Holder's Name</label>
                        <input type='text' placeholder='Sunil Dissananyake' className='form-control' value={accname} onChange={(e) => setAccname(e.target.value)} required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="branch">Branch</label>
                        <input type="text" placeholder='Enter branch name' className='form-control' value={branch} onChange={(e) => setBranch(e.target.value)} required />
                    </div>
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Update</h7></button>
                </form>
            </div>
        </div>
    );
}

export default UpdateInfo;
