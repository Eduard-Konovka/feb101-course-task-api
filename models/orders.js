const fs = require('fs/promises');
const path = require('path');

const db = path.join(__dirname, '../db/db.json');

async function addOrder(reqBody) {
  const data = await fs.readFile(db);
  const dataBase = JSON.parse(data);

  dataBase.orders.push(reqBody);
  await sendOrder(dataBase);
  return reqBody;
}

const sendOrder = async newDataBase => {
  await fs.writeFile(db, JSON.stringify(newDataBase));
};

module.exports = {
  addOrder,
};
