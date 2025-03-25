import React from 'react';
import { assets } from '../assets/assets';
const Footer = ()=>{
    return(
        <div>
            <hr className='text-gray-400 mb-4 mt-40' />
            <div className='flex flex-col p-4 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-gray-800'>
                <div>
                    <img className='w-36 bord40' src={assets.logo_richlook} alt="brand_logo" />
                    <p className='w-full md:w-2/3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officiis nisi eligendi, quae magnam qui vero saepe laborum vel, modi expedita necessitatibus esse ullam non illo ab dicta corporis similique fugit provident veritatis rerum, in quis reiciendis! Ex recusandae velit quisquam culpa provident consequatur magni, debitis molestias labore quam qui?</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Product</li>
                        <li>Policy</li>
                    </ul>
                </div>


                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>+91 9898989898</li>
                        <li>contact@richlook.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr className='text-gray-400 mb-2' />
                <p className='text-center font-base text-gray-600 mb-8'>Copyright@2025_richlook.com - All Right Reserved </p>
            </div>
        </div>
    )
}
export default Footer;