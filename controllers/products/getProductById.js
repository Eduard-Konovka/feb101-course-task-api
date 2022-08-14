const NotFound = require('http-errors');
const { Product } = require('../../models');

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw new NotFound(404, `Contact with id = ${id} not found!`);
  }
  res.json(result);
};

module.exports = getProductById;
