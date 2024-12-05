import express from 'express';
import { order, verify } from '../controller/paymentController.js';

const router = express.Router();

// TEST ROUTE
router.get('/get-payment', (req, res) => {
    res.json("Payment Details");
})

//ORDER ROUTE
// http://localhost:4000/api/payment/order
router.post('/order', order)

//VERIFY ROUTE
// http://localhost:4000/api/payment/verify
router.post('/verify', verify)

export default router;