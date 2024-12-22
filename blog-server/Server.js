import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';
import routesPost from './routes/routesPost.js';
dotenv.config();

const App = express();
App.use(express.json());
App.use(cors())

App.use(routesPost)
connectDB();


App.listen(process.env.PORT, () => {    
    console.log(`Server is running on port ${process.env.PORT}`);
});