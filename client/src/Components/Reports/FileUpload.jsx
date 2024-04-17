import React, { useState } from 'react';
import axios from 'axios';



const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadStatus(response.data.status);
        } catch (error) {
            console.error('Error uploading file: ', error);
            setUploadStatus('failed');
        }
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
        <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
        <div>
            <br></br>
            <h2><center>Upload Inventory Reports - Care Central</center></h2><br></br>
            <form onSubmit={handleSubmit}>
               <center><input type="file" accept=".pdf" onChange={handleFileChange} style={{ backgroundColor: '#001f3f',padding:'10px', color:'#fff'}}/></center> <br></br><br></br><br></br>
               <center>   <button className='btn btn-light rounded-2' type='Submit' style={{ backgroundColor: '#001f3f',padding:'10px'}}><h7 style={{ color: 'white' }}>Upload</h7></button></center> 
                <br></br><br></br>
            </form>
            {uploadStatus && (
                <p><center>Upload Status: {uploadStatus === 'success' ? 'Success' : 'Failed'}</center></p>
            )}<br></br>
        </div>
        </div></div>
    );
};

export default FileUpload;
