import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel';
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
            image1.map(async (item)=>{
                let reuslt = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
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
            sizes: JSON.parse(sizes),
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

}


// function for remove product
const removeProduct = async(req, res)=>{

}


// function for single product
const singleProduct = async(req, res)=>{

}

export {addProduct, listProduct, removeProduct, singleProduct};