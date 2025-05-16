import React, { useState, useContext  } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/shopContext';
const PlaceOrder=()=>{

    const [payMethod, setPayMethod] = useState('cod');

    const {navigate} = useContext(ShopContext);



    return(
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
            {/* --------------- Left Side -------------- */}
            <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELEVERY'} text2={'INFORMATION'}/>
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='First Name' />
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Last Name' />
                </div>
                <input className='border border-gray-300 rounded py-2 px-4 w-full' type="email" placeholder='Email Address' />
                <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='City' />
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Pin Code' />
                    <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Country' />
                </div>
                <input className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Mobile' />
            </div>

            {/* --------------- Right Side-------------- */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal/>
                </div>
                <div className='mt-12 text-xl sm:text-2xl my-3'>
                    <Title text1={'PAYMENT'} text2={'METHOD'}/>
                    {/* ------------ Paymethod Method Selection ------------- */}
                    <div className='flex  gap-3 flex-col lg:flex-row'>
                        <div onClick={()=>setPayMethod('stripe')} className='flex item-center gap-3 border border-gray-400 p-2 px-4 cursor-pointer'>
                            <p className={`min-w-4 h-4 border rounded-full my-auto ${payMethod === 'stripe'? 'bg-green-400':''}`}></p>
                            <img className='h-8 mx-4' src={assets.stripe_icon} alt="" />
                        </div>
                        <div onClick={()=>setPayMethod('razorpay')} className='flex item-center gap-3 border border-gray-400 p-2 px-4 cursor-pointer'>
                            <p className={`min-w-4 h-4 border rounded-full my-auto ${payMethod === 'razorpay'? 'bg-green-400':''}`}></p>
                            <img className='h-8 mx-4' src={assets.razorpay_icon} alt="" />
                        </div>
                        <div onClick={()=>setPayMethod('cod')} className='flex item-center gap-3 border border-gray-400 p-2 px-4 cursor-pointer'>
                            <p className={`min-w-4 h-4 border rounded-full my-auto ${payMethod === 'cod'? 'bg-green-400':''}`}></p>
                            <p className='text-medium font-bold'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className='w-full text-end mt-8 item-center'>
                        <button onClick={()=>navigate('/order')} className='bg-black text-white text-sm px-16 py-2'>PLACE ORDER</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default PlaceOrder;