const createError = require('http-errors');

const { orders } = require('../../models');

const addOrders = async (req, res) => {
  // const { error } = schema.validate(req.body);
  // if (error) {
  //   throw createError(400, {
  //     message: `Missing required field: ${error.message}`,
  //   });
  // }
  const result = await orders.addOrder(req.body);
  res.status(201).json(result);
};

module.exports = addOrders;
