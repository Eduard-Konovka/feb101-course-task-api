const { shop } = require('../../models');

const getListShops = async (req, res) => {
  const result = await shop.listShops();
  res.json(result);
};

module.exports = getListShops;
