const express = require('express');
const router = express.Router();

const { orders } = require('../db');

// POST /orders
router.post('/', (req, res) => {
  res.json({
    message: 'Add success',
  });
});

module.exports = router;
