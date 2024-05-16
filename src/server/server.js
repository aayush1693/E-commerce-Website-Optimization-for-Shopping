// server.js
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;

// Security-related HTTP headers
app.use(helmet());

// Logging HTTP requests
app.use(morgan('tiny'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Sample route for getting products
app.get('/api/products', (req, res) => {
  // Fetch products from the database and send them as a response
  // This is where you would implement optimizations for performance
  res.json({ products: [] }); // Replace with actual data
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
