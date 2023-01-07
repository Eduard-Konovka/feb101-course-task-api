const NotFound = require('http-errors');
const { Book } = require('../../models');

const getBookById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  if (!result) {
    throw new NotFound(404, `Contact with id = ${id} not found!`);
  }
  res.json(result);
};

module.exports = getBookById;
