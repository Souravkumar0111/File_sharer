import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DbConnection from './Database/db.js';
import dotenv from 'dotenv';

dotenv.config();


const app=express();
app.use(cors());
app.use('/',router);

const PORT=process.env.PORT||3000;

DbConnection();
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT} `)});