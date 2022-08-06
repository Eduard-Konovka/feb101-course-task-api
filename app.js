const express = require('express');
const cors = require('cors');

const server = express();

const { shopsRouter, productsRouter, ordersRouter } = require('./routes');

const { PORT = 4000 } = process.env;

server.use(
  cors('https://eliftech-school-delivery-app-eduard-konovka.netlify.app/'),
);

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
