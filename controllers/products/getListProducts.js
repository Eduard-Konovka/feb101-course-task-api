const { products } = require('../../models');

const getListProducts = async (req, res) => {
  const result = await products.listProducts();
  res.json(result);
};

module.exports = getListProducts;
