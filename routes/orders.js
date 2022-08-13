const express = require('express');

const router = express.Router();

const { ctrlWrapper, validation } = require('../middlewares');
const { order } = require('../models');
const { orders: ctrl } = require('../controllers');

router.post('/', validation(order.joiSchema), ctrlWrapper(ctrl.addOrders));

module.exports = router;
