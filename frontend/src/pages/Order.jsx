import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';

const Order = ()=>{
    const {products, currency} = useContext(ShopContext)
    return (
        <div className='border-t pt-16'>
            <div className='text-xl sm:text-2xl'>
                <Title text1={'MY'} text2={'ORDER'}/>
            </div>

            <div>
                {
                    products.slice(1,4).map((item, index)=>(
                        <div key={index} className='flex flex-col md:flex-row border-t border-b border-gray-400 py-4 text-gray-600 md:item-center md:justify-between gap-4'>
                            <div className='flex item-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                                <div>
                                    <p className='sm:text-base font-medium'>{item.name}</p>
                                    <div className='flex item-center gap-3 mt-2 text-base text-gray-500'>
                                        <p className='text-lg'>{currency}{item.price}</p>
                                        <p>Quantity: 1</p>
                                        <p>Size: M</p>
                                    </div>
                                    <p className='mt-4'>Date: <span>15, May, 2025</span></p>
                                </div>
                            </div>
                            <div className=' md:w-1/2 flex justify-between'>
                                <div className='flex h-10 my-auto item-center gap-3'>
                                    <p className='min-w-2 h-2 my-auto rounded-full bg-green-500'></p>
                                    <p className='text-sm my-auto md:text-base'>Ready to ship</p>
                                </div>
                                <button className='border py-2 px-4 text-sm font-medium rounded-sm h-10 my-auto mx-4' >Track Order</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Order;