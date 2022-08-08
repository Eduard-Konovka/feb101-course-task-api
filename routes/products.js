const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const { products } = require('../models');

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const result = await products.listProducts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/${id}
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await products.getProductById(id);
    if (!result) {
      throw createError(404, `Product with id '${id}' not found!`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
