import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login =({setToken})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async(e) =>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
            console.log(response);
            if(response.data.success){
            setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    return(
        <div className='flex items-center min-h-screen justify-center w-full'>
            <div className='bg-white max-w-md shadow-xl px-8 py-6 rounded-lg'>
                <h1 className='text-2xl text-center font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-4 min-w-72'>
                        <p className='text-md mb-2 font-medium text-gray-700'>Email address</p>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full border border-gray-400 px-3 py-2 outline-none rounded-md' type="email" placeholder='your@email.com' required />
                    </div>

                    <div className='mb-4 min-w-72'>
                        <p className='text-md mb-2 font-medium text-gray-700'>Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full border border-gray-400 px-2 py-1 outline-none rounded-md' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='w-full bg-black text-white px-4 py-2 rounded-md mt-3' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;