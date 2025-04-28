import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({category, subCategory})=>{

    const {products} = useContext(ShopContext);
    const [relatedProduct, setRelatedProduct] =useState([]);

    useEffect(()=>{

        if(products.length >0){
            let productCopy = products.slice();

            productCopy = productCopy.filter((item)=> category === item.category);
            productCopy = productCopy.filter((item)=> subCategory === item.subCategory);

            setRelatedProduct(productCopy.slice(0,5));
        }

    },[products]);


    return(
        <div className="my-20">
            <div className="text-center text-2xl py-2">
                <Title text1={"RELATED"} text2={"PRODUCTS"}/>
            </div>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-4 gap-y-6">
                { 
                    relatedProduct.map((item, index)=>{
                        return(
                            <ProductItem key={index} id={item.id} price={item.price} image={item.image} name={item.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct;