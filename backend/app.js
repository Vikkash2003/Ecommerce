const express = require('express'); // Ensure express is imported
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/connectDatabase');
const cors = require('cors');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');


connectDB(); // Connect to the database

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'}`);
});
