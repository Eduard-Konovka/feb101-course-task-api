const express = require('express');
const router = express.Router();

const { shops } = require('../db');

// GET /shops
router.get('/', (req, res) => {
  res.json(shops);
});

module.exports = router;
