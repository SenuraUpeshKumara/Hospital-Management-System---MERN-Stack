import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'



function Users()
{
    const [Users,setUsers] = useState([])
    
    

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

    }, [])
    
    
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(errr => console.log(errr))
    }


   return (
    
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: '#e9ecef'}}>
        
    <div className='w-90 rounded p-4' style={{ backgroundColor: '#fff'}}>
        
                <Link to='/Createuser' className="btn btn-primary">Add New Inventory Item</Link>
                <br></br><br></br>
                <table className="table" >
                <thead>
                    <tr>
                        <th className="col">Drug Code</th>
                        <th className="col">Drug Name</th>
                        <th className="col">Unit Price</th>
                        <th className="col">Quantity</th>
                        <th className="col">Expiration Date</th>
                        <th className="col">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                Users.map((user) => {
                    return <tr>
                       
                        <td>{user.code}</td>
                        <td>{user.name}</td>
                        <td>{user.uprice}</td>
                        <td>{user.qty}</td>
                        <td>{user.expdate}</td>
                        
                       
                        <td>
                        <Link to={`/update/${user._id}`} className="btn btn-primary">Update this record</Link>
                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete this record</button>
                        </td>
                    </tr>
                })}
                </tbody>
                </table>
            
            

        </div>
        </div>
        
    )
}

export default Users;

