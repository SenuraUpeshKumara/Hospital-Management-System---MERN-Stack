import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Createuser() {

    const[code,SetCode] = useState()
    const[name,SetName] = useState()
    const[uprice,SetUprice] = useState()
    const[qty,SetQty] = useState()
    const[expdate,SetExpdate] = useState()
    const navigate = useNavigate()

    const validateItemCode = (value) => {
        return /^[A-Z]{2}\d{6}$/.test(value); // Regex pattern for two capital English letters followed by six numerical digits
    };


    const Submit = (e) => {
        e.preventDefault();

        if (!validateItemCode(code)) {
            alert('Invalid item code');
            return;
        }

        axios.post("http://localhost:3001/Createuser", {code,name,uprice,qty,expdate})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
   
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
     <div className='w-50 bg-white rounded p-3 'style={{ fontWeight: 'bold' }}>

     <form onSubmit={Submit} >
            <h2 style={{color:'black'}}>Add items to inventory</h2><br></br>
            <div className='mb-2'>
                <label htmlFor="code">Item Code</label>
                <input type="text" placeholder='Enter code' className='form-control'
                onChange={(e) => SetCode(e.target.value.toUpperCase())}/>
            </div>

            <div className='mb-2'>
                <label htmlFor="name">Item Name</label>
                <input type="text" placeholder='Enter drug Name' className='form-control'
                onChange={(e) => SetName(e.target.value)} required/>
            </div>

            <div className='mb-2'>
                <label htmlFor="uprice">Unit Price</label>
                <input type="text" placeholder='10.00' className='form-control'  onChange={(e) => SetUprice(e.target.value) } required/>
              
                
            </div>

            <div className='mb-2'>
                <label htmlFor="qty">Quantity</label>
                
                <input type='text' placeholder='100' className='form-control' onChange={(e) => SetQty(e.target.value)} required/>
                   
               
            </div>

            <div className='mb-2'>
                <label htmlFor="expdate">Expiration Date</label>
                <input type="date" className='form-control'
                onChange={(e) => SetExpdate(e.target.value)} required/>
            </div>
             <br></br>
            <button className='btn btn-success bg-primary  rounded-2' >Submit</button>
           
        </form>

     </div>
    </div>
  )
}

export default Createuser;