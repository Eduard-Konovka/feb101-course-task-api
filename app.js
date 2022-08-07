const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { shopsRouter, productsRouter, ordersRouter } = require('./routes');

const {
  WHITE_URL1 = 'https://eliftech-school-delivery-app-eduard-konovka.netlify.app',
  WHITE_URL2 = 'http://localhost:3000',
} = process.env;

const server = express();

const formatsLogger = server.get('env') === 'development' ? 'dev' : 'short';
server.use(logger(formatsLogger));

const whitelist = [WHITE_URL1, WHITE_URL2];
const corsOptions = {
  origin: (origin, callback) => {
    whitelist.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  },
};
server.use(server.get('env') === 'development' ? cors() : cors(corsOptions));

server.use('/api/shops', shopsRouter);
server.use('/api/products', productsRouter);
server.use('/api/orders', ordersRouter);

server.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

module.exports = server;
