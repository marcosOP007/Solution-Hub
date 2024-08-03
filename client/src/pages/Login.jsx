import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../style/login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        console.log("send")
        event.preventDefault();
        
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username:username, password:password }),
        });

        const data = await response.json();
        console.log(data);
    };


    return (

        
        <div className='d-flex bg-1 align-items-center justify-content-center vh-100'> 
            <div className='p-3 rounded-1   bg-2 w-25'>
                <h2 className='text-center text-white'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 text-secondary small' >
                        <label htmlFor='username' className='mb-1'> Username  </label>
                        <input type='username' autoComplete='off' placeholder='Enter your username' className='  form-control rounded-0 small bg-1' value={username}   onChange={(e) => setUsername(e.target.value)}/>  
                    </div>
                
                    <div className='mb-3 text-secondary small'>
                        <label htmlFor='password' className='mb-1'>Password: </label>
                        <input type='password' autoComplete='off' placeholder='Enter your password' className='  form-control rounded-0 small bg-1' value={password} onChange={(e) => setPassword(e.target.value)}/>  
                    </div>
                <button type='submit' className='w-100 btn  btn-dark rounded-0'> Login </button>
                </form>
            </div>
        </div>
    )
}



export default Login;