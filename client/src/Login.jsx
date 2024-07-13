import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/login.css'

const Login = () => {
    return (

        
        <div className='d-flex bg-1 align-items-center justify-content-center vh-100'> 
            <dix className='p-3 rounded-1   bg-2 w-25'>
                <h2 className='text-center text-white'>Login</h2>
                <form>
                    <div className='mb-3 text-secondary small' >
                        <label htmlFor='username' className='mb-1'> Username  </label>
                        <input type='username' autoComplete='off' placeholder='Enter your username' className='  form-control rounded-0 small bg-1'/>  
                    </div>
                
                    <div className='mb-3 text-secondary small'>
                        <label htmlFor='password' className='mb-1'>Password: </label>
                        <input type='password' autoComplete='off' placeholder='Enter your password' className='  form-control rounded-0 small bg-1'/>  
                    </div>
                </form>
                <button className='w-100 btn  btn-dark rounded-0'> Login </button>
            </dix>
        </div>
    )
}



export default Login;