const { Book } = require('../../models');

const getListBooks = async (req, res) => {
  const result = await Book.find({});
  res.json(result);
};

module.exports = getListBooks;
