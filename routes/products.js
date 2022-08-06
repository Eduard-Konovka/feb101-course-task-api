const express = require('express');
const router = express.Router();

const { products } = require('../db');

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
