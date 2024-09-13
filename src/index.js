const { setupServer } = require('./server');
require('dotenv').config();

setupServer();

const { setupServer } = require('./server');
const { initMongoConnection } = require('./db/initMongoConnection');
require('dotenv').config();

async function startApp() {
  await initMongoConnection();
  setupServer();
}

startApp();
