const { Shop } = require('./shop');
const { Book } = require('./book');
const { Order, joiSchema } = require('./order');

module.exports = {
  Shop,
  Book,
  Order,
  joiSchema,
};
