const express = require('express');
const cors = require('cors');
const pino = require('pino');
const pinoHttp = require('pino-http');

function setupServer() {
  const app = express();
  const logger = pino();
  const httpLogger = pinoHttp({ logger });

  app.use(cors());
  app.use(httpLogger);

  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
}

module.exports = { setupServer };

const { getContacts } = require('./controllers/contactsController');

app.get('/contacts', getContacts);

const { getContact } = require('./controllers/contactByIdController');

app.get('/contacts/:contactId', getContact);

