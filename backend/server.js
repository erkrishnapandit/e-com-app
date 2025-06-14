import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database and cloudinary
connectDB();
connectCloudinary();

// Middleware setup
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


// Api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


// Default route
app.get('/', (req, res)=>{
    res.send('Hello World!.');
})


// start the server
app.listen(PORT, ()=>{
    console.log('Server is running on port: ' + PORT);
})