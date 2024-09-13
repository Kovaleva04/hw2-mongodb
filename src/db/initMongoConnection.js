const mongoose = require('mongoose');

async function initMongoConnection() {
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const url = process.env.MONGODB_URL;
  const db = process.env.MONGODB_DB;

  const connectionString = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection failed!', error);
  }
}

module.exports = { initMongoConnection };
