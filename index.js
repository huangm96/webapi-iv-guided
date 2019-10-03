require('dotenv').config();
const server = require('./api/server.js');

const defaults = require('./config/default.js')

server.listen(defaults.port
  , () => {
  console.log(`\n*** Server Running on http://localhost:${defaults.port} ***\n`);
});
