import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = ()=>{

    const {products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext);

    const [cartDate, setCartData] = useState([]);

    useEffect(()=>{
        const tempData = [];
        for(const item in cartItem){
            for(const size in cartItem[item]){
                try{
                    if(cartItem[item][size]){
                        tempData.push({
                            id:item,
                            size:size,
                            quantity:cartItem[item][size]  
                        })
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
        console.log(tempData);
       setCartData(tempData);
    },[cartItem])
    
    return (
        <div>
           <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'YOUR'} text2={'CART'}/>
           </div>

           <div>
            {
                cartDate.map((item, index)=>{
                    const productData = products.find((product)=>product.id === item.id);
                    return(
                        <div key={index} className='py-5 border-t border-b text-gray-400 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] item-center gap-4'>
                            <div className='flex item-start gap-6 '>
                                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                    <div className='flex item-center gap-5 mt-2'>
                                        <p>{currency}{productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:-1 border bg-slate-50'>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                        
                            <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} className='border h-10 my-auto max-w-10 sm:max-w-20 p-1 sm:p-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                            <img onClick={()=>updateQuantity(item.id, item.size, 0)} className='w-6 mr-4 my-auto sm:w-8 cursor-pointer' src={assets.bin_icon} alt="" />
                        </div>
                    )
                
                })
            }
           </div>
           <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
                <CartTotal/>
            <div className='w-full text-center'>
                <button onClick={()=>{navigate('/place-order')}} className='bg-black text-white px-8 py-3 my-8 text-sm text-center cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
    
            </div>
           </div>
        </div>
    )
}

export default Cart;