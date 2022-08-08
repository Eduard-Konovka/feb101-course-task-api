const fs = require('fs/promises');
const path = require('path');

const db = path.join(__dirname, '../db/db.json');

async function addOrders(reqBody) {
  const data = await fs.readFile(db);
  const dataBase = JSON.parse(data);

  dataBase.orders.push(reqBody);
  await sendOrders(dataBase);
  return reqBody;
}

const sendOrders = async newDataBase => {
  await fs.writeFile(db, JSON.stringify(newDataBase));
};

module.exports = {
  addOrders,
};
