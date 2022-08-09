const { shops } = require('../../models');

const getListShops = async (req, res) => {
  const result = await shops.listShops();
  res.json(result);
};

module.exports = getListShops;
