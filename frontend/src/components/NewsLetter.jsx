import React from 'react';

const NewsLetter= ()=>{

    const submitHandler = (e)=>{
        e.preventDefault();
        alert('Subscribed Successfully')
    }
    return(
        <div className='text-center mb-20'>
            <p className='text-3xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto expedita repellat ea deserunt debitis tempore saepe amet, nostrum nesciunt.</p>
            <form className='w-full sm:w-1/2 flex items-center justify-between gap-4 rounded mx-auto my-6 border border-gray-400'>
                <input type="email" placeholder='Enter Your Email ID' className='w-full sm:flex-1 outline-none px-3' />
                <button onSubmit={submitHandler} type='submit' className='bg-gray-500 p-2 rounded text-white px-6  border'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetter; 