const express = require('express');

const router = express.Router();

const { ctrlWrapper } = require('../middlewares');
const { books: ctrl } = require('../controllers');

router.get('/', ctrlWrapper(ctrl.getListBooks));
router.get('/id', ctrlWrapper(ctrl.getBookById));

module.exports = router;
