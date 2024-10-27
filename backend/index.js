const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
