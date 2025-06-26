import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next)=>{
    try {
        const {token} = req.headers
        if(!token){
            return res.status(401).json({success:false, msg:"Unauthorized access!"});
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(403).json({success:false, msg:"Not Authorised Login Again"});;
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, msg:error.message || "Internal Server Error"});  
    }
}

export default adminAuth