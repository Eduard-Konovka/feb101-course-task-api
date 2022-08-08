const fs = require('fs/promises');
const path = require('path');

const db = path.join(__dirname, '../db/db.json');

async function listShops() {
  const data = await fs.readFile(db);
  return JSON.parse(data).shops;
}

module.exports = {
  listShops,
};
