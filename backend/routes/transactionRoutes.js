const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');


router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find(); 
        res.status(200).json(transactions); 
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
