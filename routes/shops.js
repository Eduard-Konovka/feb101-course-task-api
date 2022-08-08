const express = require('express');

const router = express.Router();

const { shops } = require('../models');

// GET /api/shops
router.get('/', async (req, res, next) => {
  try {
    const result = await shops.listShops();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
