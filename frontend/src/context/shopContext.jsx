import {createContext, useState, useEffect} from 'react';
import { products } from '../assets/assets';
import {toast} from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '₹';
    const delivery_Charge = 40;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem]= useState({});

    const addToCart = async (itemId, size)=>{

        if(!size){
            toast.error('Please select product size');
            return;
        }

        const cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }


    useEffect(()=>{
        console.log(cartItem);
    },[cartItem]);

    const getCartCount = ()=>{
        let totalCount = 0;
        for(let item in cartItem){
            for(let size in cartItem[item]){
                try {
                    if(cartItem[item][size]>0){
                        totalCount += cartItem[item][size];
                    }
                    
                } catch (error) {
                    
                }
                
            }

        }
        return totalCount;
    }

    const value = {
        products,
        currency,
        delivery_Charge,
        search, 
        setSearch, 
        showSearch,
        setShowSearch,
        addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;