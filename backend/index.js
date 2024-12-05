import colors from 'colors';
import dotenv from "dotenv";
import express from "express";
import cors from 'cors';

import database from './database/db.js';
import router from './routes/paymentRoutes.js';


const app = express();

dotenv.config();

const PORT = process.env.PORT ;

// middleware
app.use(express.json());
app.use(cors());

//* Available Route 
app.get('/', (req, res) => {
    res.send('Razorpay Payment Gateway Using React And Node Js ')
})

app.use('/api/payment', router);

app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`.bgBlue);
    database();
})
