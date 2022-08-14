const { Product } = require('../../models');

const getListProducts = async (req, res) => {
  const result = await Product.find({});
  res.json(result);
};

module.exports = getListProducts;
