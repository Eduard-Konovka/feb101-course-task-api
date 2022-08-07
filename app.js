const express = require('express');
const cors = require('cors');

const server = express();

const { shopsRouter, productsRouter, ordersRouter } = require('./routes');

const {
  PORT = 4000,
  WHITE_URL1 = 'https://eliftech-school-delivery-app-eduard-konovka.netlify.app',
  WHITE_URL2 = 'http://localhost:3000',
} = process.env;

const whitelist = [WHITE_URL1, WHITE_URL2];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(cors(corsOptions));

server.use('/shops', shopsRouter);
server.use('/products', productsRouter);
server.use('/orders', ordersRouter);

server.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

server.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
