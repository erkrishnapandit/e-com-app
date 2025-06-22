import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';
// function for add product
const addProduct = async (req, res)=>{

    try {
        const {name, description, price, category, subCategory, size, bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(item => item !== undefined)

        let imagesUrl= await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            subCategory, 
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(size),
            image:imagesUrl,
            date:Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();
        res.json({success:true, msg:"product added successfully!"});


        console.log(name, description, price, category, subCategory, size, bestseller)
        console.log(imagesUrl);


    
    } catch (error) {
        res.json({success: false, msg: error.mssage});
        
    }
}


// function for list product
const listProduct = async (req, res)=>{

    try{

        const products = await productModel.find({});
        res.json({success:true, products});


    }catch(error){
        console.log(error)
        res.json({success:false, msg:'Internal Server Error'});
    }

}


// function for remove product
const removeProduct = async(req, res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, msg:"Product removed successfully!"});s
        
    } catch (error) {
        console.log(error)
        res.json({success:false, msg:'Internal Server Error'});
    }

}


// function for single product
const singleProduct = async(req, res)=>{

    try {
        const {productId} = req.body;
        const singleProduct = await productModel.findById(productId);
        res.json({success:true, product:singleProduct});
        
    } catch (error) {
        console.log(error);
        res.json({success:false, msg:"Internal Server Error"});;
        
    }

}

export {addProduct, listProduct, removeProduct, singleProduct};