import React, {useState} from "react";
import { assets } from "../assets/assets";

const Add = () => {

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    
    const [bestSeller, setBestSeller] = useState(false);
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productSize, setProductSize] = useState([]);
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("Men");
    const [productSubCategory, setProductSubCategory] = useState("Topwear");

    const onSubmitHandler = ()=>{
      e.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-10 p-10 w-full items-start">
      <div>
        <p className="mb-5">Upload Image</p>
        <div className="flex gap-5">
          <label htmlFor="img1">
            <img
              className="w-20 border border-dashed p-4 border-gray-400 cursor-pointer"
              src={!image1?assets.upload_icon : URL.createObjectURL(image1[0])}
              alt=""
            />
            <input onChange={(e)=>setImage1(e.target.files)} type="file" id="img1" hidden />
          </label>

          <label htmlFor="img2">
            <img
              className="w-20 border border-dashed p-4 border-gray-400 cursor-pointer"
              src={!image2?assets.upload_icon : URL.createObjectURL(image2[0])}
              alt=""
            />
            <input onChange={(e)=>setImage2(e.target.files)} type="file" id="img2" hidden />
          </label>

          <label htmlFor="img3">
            <img
              className="w-20 border border-dashed p-4 border-gray-400 cursor-pointer"
              src={!image3?assets.upload_icon : URL.createObjectURL(image3[0])}
              alt=""
            />
            <input onChange={(e)=>setImage3(e.target.files)} type="file" id="img3" hidden />
          </label>

          <label htmlFor="img4">
            <img
              className="w-20 border border-dashed p-4 border-gray-400 cursor-pointer"
              src={!image4?assets.upload_icon : URL.createObjectURL(image4[0])}
              alt=""
            />
            <input onChange={(e)=>setImage4(e.target.files)} type="file" id="img4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-3">Product Name</p>
        <input
          className="w-full max-w-[500px] px-4 py-1"
          value={productName}
          onChange={(e)=>setProductName(e.target.value)}
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-3">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-4 py-1"
          value={productDesc}
          onChange={(e)=>setProductDesc(e.target.value)}
          type="-text"
          placeholder="Write Here"
          required
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <p className="mb-2">Product Category</p>
        <select onChange={(e)=>setProductCategory(e.target.value)} className="w-full px-4 py-1">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>

        <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e)=>setProductSubCategory(e.target.value)} className="w-full px-4 py-1">
            <option value="Topwear">Topware</option>
            <option value="Bottemwear">Bottemware</option>
            <option value="Winterwear">Kidsware</option>
          </select>
        </div>

        <div>
          <p className="mb-2 px-3 py-1 w-full sm:w-[120px]">Product Price</p>
          <input value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} className="px-4 py-1" type="number" placeholder="99" />
        </div>
      </div>
      <div>
        <p>Product size</p>
        <div className="flex gap-3 mt-3">
          <div onClick={()=>setProductSize(prev=>prev.includes("S")?prev.filter(item=>item !== "S") : [...prev, "S"])} className={`${productSize.includes("S")?"bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</div>
          <div onClick={()=>setProductSize(prev=>prev.includes("M")?prev.filter(item=>item !== "M") : [...prev, "M"])} className={`${productSize.includes("M")?"bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</div>
          <div onClick={()=>setProductSize(prev=>prev.includes("L")?prev.filter(item=>item !== "L") : [...prev, "L"])} className={`${productSize.includes("L")?"bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</div>
          <div onClick={()=>setProductSize(prev=>prev.includes("XL")?prev.filter(item=>item !== "XL") : [...prev, "XL"])} className={`${productSize.includes("XL")?"bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</div>
          <div onClick={()=>setProductSize(prev=>prev.includes("XXL")?prev.filter(item=>item !== "XXL") : [...prev, "XXL"])} className={`${productSize.includes("XXL")?"bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</div>
        </div>
      </div>

      <div className="flex gap-3 items-center mt-2">
        <input onChange={()=>setBestSeller(prev=>!prev)} checked={bestSeller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">Add to Best Seller</label>
      </div>

      <button className="w-50 bg-black text-white px-4 py-3" type="submit">ADD PRODUCT</button>
    </form>
  );
};

export default Add;
