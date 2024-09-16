import mongoose from 'mongoose';

import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGO_USER');
    const pwd = env('MONGO_PASSWORD');
    const url = env('MONGO_URL');
    const db = env('MONGO_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};