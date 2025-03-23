import React from 'react';
import { assets } from '../assets/assets';

const Hero = ()=>{
    return(

        <div className='flex flex-col sm:flex-row border border-gray-300'>
            {/* Hero left side section */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-gray-800 p-10'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-gray-400'></p>
                        <p className='font-medium font-semibold text-sm md:text-base'>OUR BEST SELLER</p>
                    </div>
                    <h1 className='prata-regular text-5xl sm:py-3 lg:text-6xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 sd:w-11 h-[2px] bg-gray-400'></p>
                    </div>
                </div>
            </div>

            {/* Hero right side section */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10sm:py-0' >
                    <img className='w-full' src={assets.hero_icon1} alt="" />
            </div>
        </div>
    )
}

export default Hero;