import React from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
const Navbar = ()=>{
    return (
        <div className='flex justify-between bg-gray-200 px-4 items-center font-medium'>
            
            <img src={assets.logo_richlook} className='w-36' alt="logo" />
            <ul className='hidden sm:flex items-center justify-between gap-5 p-5 test-black'>

                <NavLink to='/' className='flex flex-col text-black'>
                    <p >Home</p>
                    <hr className='bg-gray-800'/>
                </NavLink>

                <NavLink to='/collection' className='flex flex-col text-black'>
                    <p >Collection</p>
                    <hr className='bg-gray-800'/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col text-black'>
                    <p >About</p>
                    <hr className='bg-gray-800'/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col text-black'>
                    <p >Contact</p>
                    <hr className='bg-gray-800'/>
                </NavLink>

            </ul>
            <div className='flex items-center flex-row gap-2'>
                <img src={assets.search_icon} className='w-10 min-w-6 p-1 cursor-pointer' alt="search_icon" />
                <div className='group relative'> 
                    <img src={assets.user_icon} className='w-10 min-w-6 p-1 cursor-pointer' alt="user_icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-1'>
                        <div className='flex flex-col gap-1 w-36 py-3 px-5 bg-slate-300 rounded'>
                            <p className='cursor-pointer'>My Profile</p>
                            <p className='cursor-pointer'>My Orders</p>
                            <p className='cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-10 min-w-5' alt="" />
                    <p className='absolute right-[4px] bottom-[4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
                </Link>
                <img src={assets.menu_icon} className='w-6 sm:hidden cursor-pointer' alt="" />
               
            </div>

        </div>
    )
}

export default Navbar;