import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
// App configuration
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middleware setup
app.use(express.json());
app.use(cors());


// api endpoints
app.use('api/user', userRouter)
app.use('/api/product', productRouter)



app.get('/', (req, res)=>{
    res.send('Hello World1233456!!');
})


// start the server
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})