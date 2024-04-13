import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Updateuser() {

    const{id} = useParams();
    const [code,setCode] = useState('')
    const[name,setName] = useState('')
    const[uprice,setUprice] = useState('')
    const[qty,setQty] = useState('')
    const[expdate,setExpdate] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('http://localhost:3001/getUser/'+id)
      .then(result =>{console.log(result)
        
        
        setCode(result.data.code)
        setName(result.data.name)
        setUprice(result.data.uprice)
        setQty(result.data.qty)
        setExpdate(result.data.expdate)
      })
      .catch(err => console.log(err))
  },[])

  

  const Update =(e) => {
    e.preventDefault();

    axios.put('http://localhost:3001/updateuser/'+ id, { code,name,uprice,qty,expdate })
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
      <div className='w-50 bg-white rounded p-3 'style={{ fontWeight: 'bold' ,color: 'black'}}>

        <form  onSubmit={Update}>
             <h2>Update Inventory Details </h2><br></br>

             <div className="mb-2">
               <label htmlFor="">Item Code</label>
               <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}/>
           </div>
           <div className="mb-2">
               <label htmlFor="">Item Name</label>
               <input type="text" placeholder="Enter drug name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
           </div>
           <div className="mb-2">
               <label htmlFor="">Unit Price</label>
               <input type="text" placeholder="10.00" className="form-control" value={uprice} onChange={(e) => setUprice(e.target.value)}/>
           </div>
           <div className="mb-2">
               <label htmlFor="">Quantity</label>
               <input type="text" placeholder="100" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)}/>
           </div>
           <div className="mb-2">
               <label htmlFor="">Expiration Date</label>
               <input type="date" placeholder="" className="form-control" value={expdate} onChange={(e) => setExpdate(e.target.value)}/></div>
               <br></br>
           <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h7 style={{ color: 'white' }}>Update</h7></button>
       </form>
       </div>
       </div>
    )
}

export default Updateuser;