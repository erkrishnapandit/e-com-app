import React from 'react';
import { assets } from '../assets/assets';
const OurPolicy = ()=>{

    return(

        <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-4 text-center py-30'>
            <div>
                <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="exchange" />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We Offer hassel free exchange policy</p>
            </div>

            <div>
                <img className='w-10 m-auto mb-5' src={assets.return_icon} alt="exchange" />
                <p className='font-semibold'>Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>

            <div>
                <img className='w-12 m-auto mb-5' src={assets.support_icon} alt="exchange" />
                <p className='font-semibold'>Customer Support</p>
                <p className='text-gray-400'>We provide 24x7 Custommer Support</p>
            </div>
        </div>
    )
}

export default OurPolicy;