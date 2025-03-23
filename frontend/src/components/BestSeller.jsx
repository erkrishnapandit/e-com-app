import React, {useState, useContext, useEffect} from 'react';
import Title from './Title';
import { ShopContext } from '../context/shopContext';
import ProductItem from './ProductItem';


 const BestSeller = ()=>{
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestseller === true));
        setBestSeller(bestProducts.slice(0,4))
    },[])
    return(
        <div>
            <div className='text-center text-2xl py-5 mb-10'>
                <Title text1={"BEST"} text2={"SELLER"}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolores numquam dolore consectetur, impedit eveniet illum magnam? </p>
            </div>

            {/* Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-5 gap-y-10'>
                {
                    bestSeller.map((item, index)=>{
                        return(
                            <ProductItem key={index} id={item.id} image={item.image} price={item.price} name={item.name}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSeller;