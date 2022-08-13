// const { Schema, model } = require('mongoose');
const Joi = require('joi');

const joiSchema = Joi.object({
  user: Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),

    email: Joi.string()
      .pattern(/.+@.+..+/i)
      .email({
        minDomainSegments: 2,
      })
      .required(),

    phone: Joi.string()
      .pattern(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      )
      .required(),

    address: Joi.string().required(),
  }),
  cart: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      imgUrl: Joi.string().allow('').required(),
      title: Joi.string().required(),
      descr: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().min(0.01).required(),
      shopId: Joi.string().required(),
      qwantity: Joi.number().min(1).required(),
      cost: Joi.number().min(1).required(),
    }),
  ),
  totalPrice: Joi.number().min(0.01).required(),
});

const fs = require('fs/promises');
const path = require('path');

const db = path.join(__dirname, '../db/orders.json');

async function addOrder(reqBody) {
  const data = await fs.readFile(db);
  const dataBase = JSON.parse(data);

  dataBase.push(reqBody);
  await sendOrder(dataBase);
  return reqBody;
}

const sendOrder = async newDataBase => {
  await fs.writeFile(db, JSON.stringify(newDataBase));
};

module.exports = {
  joiSchema,
  addOrder,
};
