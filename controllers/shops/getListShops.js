const { Shop } = require('../../models');

const getListShops = async (req, res) => {
  const result = await Shop.find({});
  res.json(result);
};

module.exports = getListShops;
