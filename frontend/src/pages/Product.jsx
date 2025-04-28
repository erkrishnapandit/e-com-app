import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = ()=>{

    const {productId} = useParams();
    const {products, currency} = useContext(ShopContext);

    const [productData, setProductData] = useState(null);
    const [image, setImage]= useState('');

    const [size, setSize]=useState("");

    const fetchProductData = async()=>{
        products.map((item)=>{
            if(item.id === productId ){
                setProductData(item);
                setImage(item.image[0]);
                console.log(item);
                return;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    }, [productId])
    
    return productData ? (
        <div className=''>
            {/* ---------- Product Data ----------- */}
            <div className='flex flex-col sm:flex-row gap-4'>
                {/* ------------- Product Image ---------- */}
                <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>
                    <div className='flex sm:flex-col overflow-x-auto h-[75vh] gap-1 justify-between sm:justify-normal sm:w-[20%] w-full'>
                        {productData.image.map((item, index)=>{
                            return(
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full mb-3 flex-shrink-0 cursor-pointer' />
                            )
                        })}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* -------------- Product Info --------- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex item-center gap-1 mt-2 p-1'>
                        <img src={assets.star_color} alt="" className='w-3' />
                        <img src={assets.star_color} alt="" className='w-3' />
                        <img src={assets.star_color} alt="" className='w-3' />
                        <img src={assets.star_color} alt="" className='w-3' />
                        <img src={assets.star_white} alt="" className='w-3' />
                        <p className='text-[10px] pl-2'>(125)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.size.map((item, index)=>{
                                return(
                                    <button onClick={()=>setSize(item)} className={`border border-gray-200 py-2 px-4 bg-gray-100 ${item === size?'border-orange-500':''}`} key={index} >{item}</button>
                                )
                            })}
                        </div>
                    </div>
                    <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5 '/>
                    <div className='flex flex-col gap-1 text-sm text-gray-500 mt-5'>
                        <p>100% Original Product.</p>
                        <p>Cash On Delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* ------------------- Discription & Review Section ------------------- */}
            <div className='mt-10'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Discription</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (125)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, ipsa et adipisci fugiat ullam, libero excepturi harum asperiores natus expedita minus officia magnam quibusdam omnis dolore odio sint! Corporis a, placeat fugit suscipit minima fugiat iusto iure praesentium dolore reprehenderit itaque accusantium odit aliquid nulla officia sequi eos nesciunt commodi, ipsum inventore illo architecto? Officia voluptas voluptatibus ea error deleniti!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit similique nam dicta a inventore et, incidunt pariatur qui laboriosam vitae!</p>
                </div>
            </div>
            {/* --------------- Display Related product --------------- */}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
        </div>
    ):(
        <div className='opecity-0'> </div>
    )
}

export default Product;