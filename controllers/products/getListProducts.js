const { product } = require('../../models');

const getListProducts = async (req, res) => {
  const result = await product.listProducts();
  res.json(result);
};

module.exports = getListProducts;
