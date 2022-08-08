const express = require('express');
const createError = require('http-errors');
const Joi = require('joi');

const { orders } = require('../models');

const router = express.Router();

const schema = Joi.object({
  user: Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),

    email: Joi.string()
      .pattern(/.+@.+..+/i)
      .email({
        minDomainSegments: 2,
      })
      .required(),

    phone: Joi.string()
      .pattern(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      )
      .required(),

    address: Joi.string().required(),
  }),
  cart: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      imgUrl: Joi.string().allow('').required(),
      title: Joi.string().required(),
      descr: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().min(0.01).required(),
      shopId: Joi.string().required(),
      qwantity: Joi.number().min(1).required(),
      cost: Joi.number().min(1).required(),
    }),
  ),
  totalPrice: Joi.number().min(0.01).required(),
});

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, {
        message: `Missing required field: ${error.message}`,
      });
    }
    const result = await orders.addOrders(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
