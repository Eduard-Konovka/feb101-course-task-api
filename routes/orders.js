const express = require('express');

const router = express.Router();

const { ctrlWrapper } = require('../middlewares');
const { orders: ctrl } = require('../controllers');

router.post('/', ctrlWrapper(ctrl.addOrders));

module.exports = router;
