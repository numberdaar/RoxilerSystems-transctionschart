const axios = require('axios');
const Transaction = require('../models/Transaction');
const connectDB = require('../config/db');

const seedDatabase = async () => {
    try {
        console.log('Connecting to the database...');
        await connectDB();
        console.log('Connected to the database successfully.');

        console.log('Fetching transaction data...');
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;
        console.log(`Fetched ${data.length} transactions.`);

        console.log('Seeding data into the database...');
        await Transaction.insertMany(data);
        console.log('Database seeded successfully.');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
