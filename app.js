const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { shopsRouter, productsRouter, ordersRouter } = require('./routes');

const server = express();

const formatsLogger = server.get('env') === 'development' ? 'dev' : 'short';
server.use(logger(formatsLogger));

const whitelist = [({ WHITE_URL1, WHITE_URL2 } = process.env)];
const allowedServers = server.get('env') === 'development' ? '*' : whitelist;
server.use(cors({ origin: allowedServers }));

server.use(express.json());
server.use(express.static('public'));

server.use('/api/shops', shopsRouter);
server.use('/api/products', productsRouter);
server.use('/api/orders', ordersRouter);

server.use((req, res) => {
  res.status(404).json({
    message: 'This address or route was not found',
  });
});

server.use((err, req, res, next) => {
  const {
    status = 500,
    message = `Server error. ${err.message}. Please try again later`,
  } = err;

  res.status(status).json({
    message,
  });

  console.log(`\n${message}\n`);
});

module.exports = server;
