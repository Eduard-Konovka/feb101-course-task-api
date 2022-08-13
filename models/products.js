const fs = require('fs/promises');
const path = require('path');

const db = path.join(__dirname, '../db/products.json');

async function listProducts() {
  const data = await fs.readFile(db);
  return JSON.parse(data);
}

async function getProductById(id) {
  const products = await listProducts();
  return products.find(product => product.id === id) || null;
}

module.exports = {
  listProducts,
  getProductById,
};
