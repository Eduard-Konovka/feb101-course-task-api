const server = require('./app');

const { PORT = 4000 } = process.env;

server.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
