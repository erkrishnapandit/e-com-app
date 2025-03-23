import React, {useState, useEffect, useContext} from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = ()=>{

    const {products} = useContext(ShopContext);
    const [latestCollection, setLatestCollection]=useState([]);

    useEffect(()=>{
       setLatestCollection(products.slice(0,12)); 
    },[])
    

    return(
        <div className='my-10'>
            <div className='text-center py-5 text-2xl  mb-10'>
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia esse, suscipit accusantium aliquid beatae?</p>
            </div>

            {/* Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-5 gap-y-10'>
                {
                    latestCollection.map((item, index)=>{
                        return(
                            <ProductItem key={index} id={item.id} image={item.image} price={item.price} name={item.name}/>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default LatestCollection;