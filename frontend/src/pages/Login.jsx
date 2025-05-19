import React, {useState} from 'react';

const Login = ()=>{
    const [currentState, setCurrentState] = useState('Sign Up');

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 items-center w-[90%] m-auto sm:max-w-96 mt-14 text-gray-800 '>
            <div className='inline-flex gap-2 item-center'>
                <p className='text-3xl'>{currentState}</p>
                <hr className='border-none my-auto h-[2.5px] bg-gray-400 w-8'/>
            </div>
            {currentState === 'Login'?'':<input className='w-full px-3 py-2 border border-gray-600' type="name" placeholder='name' required />}
            <input className='w-full px-3 py-2 border border-gray-600' type="email" placeholder='email' required />
            <input className='w-full px-3 py-2 border border-gray-600' type="password" placeholder='password' required />
            <div className='flex w-full justify-between text-sm'>
                <p className='cursor-pointer'>Forget Your Password? </p>
                {currentState === 'Login'
                ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> 
                : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>login here</p>}
            </div>
            <button className='cursor-pointer bg-black text-white px-8 py-2 font-light mt-4'>{currentState === 'Login'? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login;