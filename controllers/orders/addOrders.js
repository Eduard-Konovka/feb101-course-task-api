// const createError = require('http-errors');

const { Order } = require('../../models');

const addOrders = async (req, res) => {
  // const { error } = schema.validate(req.body);
  // if (error) {
  //   throw createError(400, {
  //     message: `Missing required field: ${error.message}`,
  //   });
  // }
  // const result = await addOrder(req.body);
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = addOrders;
