const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://kartiksapkal5799:6A1CurykwJgcqb4n@cluster0.v1e0d.mongodb.net');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('DB Connection Error:', error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
