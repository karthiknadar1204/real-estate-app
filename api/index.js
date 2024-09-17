import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-route.js'
import authRouter from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from 'path';
import cors from 'cors';

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

(async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
        
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log("MongoDB error", error);
    }
})();

const __dirname = path.resolve();

// app.get('/test',(req,res)=>{
//     res.send('hello world')
// })

app.use('/api/user',userRouter) ;//domain/api/user->when hitting this endpoint, api call executed in userRouter at /test
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
