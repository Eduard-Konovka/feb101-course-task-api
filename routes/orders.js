const express = require('express');

const router = express.Router();

const { ctrlWrapper, validation } = require('../middlewares');
const { orders } = require('../models');
const { orders: ctrl } = require('../controllers');

router.post('/', validation(orders.joiSchema), ctrlWrapper(ctrl.addOrders));

module.exports = router;
