import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = ()=>{
    const {products, showSearch, search} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType]=useState('relevant');

    const toggleCategory = (e)=>{
        if(category.includes(e.target.value)){
            setCategory(prev => prev.filter(item => item !== e.target.value));
        }else{
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e)=>{
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(item=>item !== e.target.value));
        }else{
            setSubCategory(prev=>[...prev,e.target.value]);
        }
    }

    const applyFilter = () =>{
        let productCopy = products.slice();

        if(showSearch && search){
            productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if(category.length>0){
            productCopy = productCopy.filter(item=>category.includes(item.category));
        }

        if(subCategory.length>0){
            productCopy = productCopy.filter(item=>subCategory.includes(item.subCategory));
        }
        setFilterProduct(productCopy);
    }
    

    const sortProcuct = ()=>{
        let filterProductCopy = filterProduct.slice();

        switch(sortType){
            case 'low-high':
                setFilterProduct(filterProductCopy.sort((a,b)=>a.price-b.price));
                break;
            case 'high-low':
                setFilterProduct(filterProductCopy.sort((a,b)=>b.price-a.price));
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(()=>{
        applyFilter();
    },[category, subCategory, search, showSearch]);


    useEffect(()=>{
        sortProcuct();
    },[sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 px-8 pt-10 border-t border-gray-300'  >
            {/* Left Side Section */}
            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={()=>setShowFilter(!showFilter)} className='text-xl flex items-center cursor-pointer'>FILTERS
                <img className={`h-4 sm:hidden ${showFilter?'rotate-90': ''}`} src={assets.arrowhead} alt="" />
                </p>

                {/* Category Filter */}
                <div className={`border border-gray-400 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-base font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        <p className='flex gap-2'>
                            <input onChange={toggleCategory}  className='w-3' type="checkbox" value={'men'} />MEN
                        </p>

                        <p className='flex gap-2'>
                            <input onChange={toggleCategory}  className='w-3' type="checkbox" value={'women'} />WOMEN
                        </p>

                        <p className='flex gap-2'>
                            <input onChange={toggleCategory} className='w-3' type="checkbox" value={'kids'} />KIDS
                        </p>
                    </div>
                </div>

                {/* Subcategory Filter */}
                <div className={`border border-gray-400 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-base font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        <p className='flex gap-2'>
                            <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'topwear'} />Topwear
                        </p>

                        <p className='flex gap-2'>
                            <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'bottemware'} />Bottomwear
                        </p>

                        <p className='flex gap-2'>
                            <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'winterwear'} />Winterwear
                        </p>
                    </div>
                </div>
          </div>

          {/* Right Side Section */}
          <div className='flex-1 '>
            <div className='flex justify-between text-base sm:test-2xl mb-4'>
                <Title text1={'ALL'} text2={'COLLECTION'}/>
                {/* Product Sorting */}
                <select onChange={(e)=>setSortType(e.target.value)} className='border-1 text-sm px-2'> 
                    <option value="relevant">Sort By: Relevant</option>
                    <option value="low-high">Sort By: Low to High</option>
                    <option value="high-low">Sort By: High to Low</option>
                </select>
            </div>
            {/* Mapping All Product */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10'>
                {
                    filterProduct.map((item, index)=>(
                        <ProductItem key={index} id={item.id} image={item.image} price={item.price} name={item.name}/>
                    ))
                }
            </div>
          </div>
        </div>
    )
}

export default Collection;