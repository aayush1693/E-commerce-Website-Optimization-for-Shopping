// products.js
const express = require('express');
const router = express.Router();

// Route to get all products
router.get('/', async (req, res) => {
  // Logic to fetch and return all products from the database
});

// Route to get a single product by ID
router.get('/:id', async (req, res) => {
  // Logic to fetch and return a single product using the provided ID
});

module.exports = router;
