const { Schema, model } = require('mongoose');

const bookSchema = Schema(
  {
    code: {
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
      maxlength: 250,
      required: true,
    },

    description: {
      type: String,
      minlength: 2,
      required: true,
    },
  },

  { versionKey: false, timestamps: true },
);

const Book = model('book', bookSchema);

module.exports = {
  Book,
};
