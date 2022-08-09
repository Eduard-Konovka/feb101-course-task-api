const { products } = require('../../models');

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await products.getProductById(id);
  if (!result) {
    throw createError(404, `Product with id '${id}' not found!`);
  }
  res.json(result);
};

module.exports = getProductById;
