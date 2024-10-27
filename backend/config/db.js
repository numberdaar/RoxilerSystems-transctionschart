const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://171ankit2020:Ankit%40123@cluster0.myts5.mongodb.net/ankit?retryWrites=true&appName=Cluster0');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('DB Connection Error:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
