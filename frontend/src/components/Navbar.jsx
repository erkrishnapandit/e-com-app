import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shopContext.jsx';

const Navbar = ()=>{

    const [visible, setVisible] = useState(false);
    const {setShowSearch}= useContext(ShopContext);

    return (
        <div className='flex justify-between px-8 items-center font-medium'>
            
            <Link to='/'>
                <img src={assets.logo_richlook} className='w-36' alt="logo" />
            </Link> 
            <ul className='hidden sm:flex items-center justify-between gap-5 p-5 test-black'>

                <NavLink to='/' className='flex flex-col text-black  '>
                    <p >HOME</p>
                    <hr className='bg-gray-800 h-[1.5px] hidden'/>
                </NavLink>

                <NavLink to='/collection' className='flex flex-col text-black '>
                    <p >COLLECTION</p>
                    <hr className='bg-gray-800 h-[1.5px] hidden'/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col text-black '>
                    <p >ABOUT</p>
                    <hr className='bg-gray-800 h-[1.5px] hidden'/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col text-black '>
                    <p >CONTACT</p>
                    <hr className='bg-gray-800 h-[1.5px] hidden'/>
                </NavLink>

            </ul>
            <div className='flex  items-center flex-row gap-2'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-10 min-w-6 p-1 cursor-pointer' alt="search_icon" />
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
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-6 sm:hidden cursor-pointer' alt="" />
            </div>

            {/* Sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all ${visible ? 'w-[200px]':'w-0'}`}>
                <div className='flex flex-col text-gray-600'> 
                    <div onClick={()=>setVisible(false)} className='flex items-center py-4 cursor-pointer'>
                        <img src={assets.back_arrows} className='h-3 mx-2 my-2' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='border border-gray-300 p-3 text-center' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='border border-gray-300 p-3 text-center' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='border border-gray-300 p-3 text-center' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='border border-gray-300 p-3 text-center' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;