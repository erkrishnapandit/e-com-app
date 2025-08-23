import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = ()=>{
    return(
        <div className="flex border border-gray-200 items-center py-2 px-[4%] justify-between">
            <img className='w-[max(10%,80px)]' src={assets.logo_richlook} alt="Logo" />
            <button className='bg-gray-700 border h-[50px] text-white px-5 sm:px-7 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar;