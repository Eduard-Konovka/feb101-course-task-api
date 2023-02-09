const { Schema, model } = require('mongoose');
const Joi = require('joi');

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /^\+?.\(?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const emailRegExp = /.+@.+..+/i;

const orderSchema = Schema(
  {
    user: {
      name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        match: nameRegExp,
        required: [true, 'Set name for contact'],
      },

      email: {
        type: String,
        match: emailRegExp,
      },

      phone: {
        type: String,
        match: phoneRegExp,
      },

      address: {
        type: String,
      },
    },

    cart: [
      {
        _id: {
          type: String,
          required: true,
        },

        id: {
          type: Number,
        },

        author: {
          type: String,
        },

        price: {
          type: Number,
          required: true,
          min: 0.01,
        },

        image: {
          type: String,
        },

        title: {
          type: String,
          required: true,
          minlength: 2,
        },

        shortDescription: {
          type: String,
          minlength: 2,
          required: true,
        },

        description: {
          type: String,
          minlength: 2,
          required: true,
        },

        count: {
          type: Number,
          required: true,
          min: 1,
          max: 42,
        },
      },
    ],

    totalCost: {
      type: Number,
      required: true,
      min: 0.01,
    },
  },

  { versionKey: false, timestamps: true },
);

const joiSchema = Joi.object({
  user: Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),

    email: Joi.string()
      .pattern(/.+@.+..+/i)
      .email({
        minDomainSegments: 2,
      }),

    phone: Joi.string().pattern(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    ),

    address: Joi.string(),
  }),

  cart: Joi.array().items(
    Joi.object({
      _id: Joi.string().required(),
      id: Joi.number().min(1).required(),
      author: Joi.string().required(),
      price: Joi.number().min(0.01).required(),
      image: Joi.string().allow('').required(),
      title: Joi.string().required(),
      shortDescription: Joi.string().required(),
      description: Joi.string().required(),
      count: Joi.number().min(1).max(42).required(),
    }),
  ),

  totalCost: Joi.number().min(0.01).required(),
});

const Order = model('order', orderSchema);

module.exports = {
  Order,
  joiSchema,
};
