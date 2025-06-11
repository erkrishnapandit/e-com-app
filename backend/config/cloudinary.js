import {v2 as cloudinary} from 'cloudinary';

const cloudinaryConfig = async ()=> {

    cloudinary.config ({
        cloud_name: process.env.CLOUDINAEY_NAME,
        api_key: process.env.CLOUDINAEY_API_KEY,
        api_secret: process.env.CLOUDINAEY_API_SECRET

    })
}

export default cloudinaryConfig;