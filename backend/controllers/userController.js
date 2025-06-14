import validator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


// Creating Token
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async(req, res)=>{
    // res.json({msg:"Login User API is working fine!"})
    try{
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({success:false, msg: "User does not exist!"})
        }

        const isMatch = await bycrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id);
            return res.status(200).json({success:true, msg:"User logged in successfully!", token});
        }else{
            res.json({success:false, msg:"Invalid credentials!"});
        }

    }catch(error){
        console.log(error);
        res.json({success:false, msg: "Internal Server Error"});
    }

}


// Route for user registration
const registerUser = async(req, res)=>{
    // res.json({msg:" Register User API is working fine!"})

    try{
        const {name, email, password} = req.body;

        // checking if user already exist or not
        const exists = await userModel.findOne({email});

        if(exists){
            return res.status(400).json({success:false, msg:"User already exists!"})
        }

        // Validating email format and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, msg:"Invalid email format!"});
        }

        if(password.length<8){
            return res.status(400).json({success:false, msg:"Please enter a strong password"})
        }

        // Hashing the password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        // Creating a new user
        const newUser = await userModel.create({
            name,
            email, 
            password: hashedPassword
        })
        const user = await newUser.save();

        // Creating a token for the user
        const token = createToken(user._id);

        res.json({success:true, token});

    }catch{
        console.log(error)
        res.status(500).json({success:false, msg: "Internal Server Error"});
    }

}

//Roout for admin login
const adminLogin = async(req, res)=>{

}
export {loginUser, registerUser, adminLogin};