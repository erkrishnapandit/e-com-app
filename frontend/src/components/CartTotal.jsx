import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/shopContext";

const CartTotal = ()=>{
    const {currency, delivery_Charge, getCartAmount} = useContext(ShopContext);
    return(
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTAL'}/>
            </div>
            <div className="flex flex-col gap-4 mt-3 text-sm">
                <div className="flex justify-between"> 
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : delivery_Charge}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_Charge}.00</p>
                </div>
            </div>

        </div>

    )

}

export default CartTotal;