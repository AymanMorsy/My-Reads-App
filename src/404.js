import React from 'react';
import './App.css'
import Err404 from './404.png';

const Error404 = ()=>{
    return(
        <div className ='error-container'>
        <h3 className ='error-title'>This Page Not Found</h3>
        <img src={Err404} alt="page Not found 404" className='error_404'/>
        </div>
    )
}

export default Error404

// alt="Paris" style="width:50%;"