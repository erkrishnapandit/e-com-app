import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

const Contact = ()=>{
    return(
        <div>
            <div className='text-center text-2xl border-t border-gray-300 pt-10'>
                <Title text1={'CONTACT'} text2={'US'}/>
            </div>

            <div className='flex flex-col md:flex-row gap-10 justify-center items-center my-10 mb-20'>
                <img className='w-full md:max-w-[540px]' src={assets.contact_icon} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl'>Our Store</p>
                    <p className='text-gray-500'>At Hotel Suprabhat <br /> X-Road Hubsiguda, Hyderabad</p>
                    <p className='text-gray-500'>Ph. +91 9898989898 <br />Email: contact@richlook.com</p>
                    <p className='text-lx font-semibolt text-xl'>Careers At Richlook</p>
                    <p>Learn more anout our team and job openings </p>
                    <button className='border px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Job</button>
                </div>
            </div>
            <NewsLetter/>
        </div>
    )
}

export default Contact;