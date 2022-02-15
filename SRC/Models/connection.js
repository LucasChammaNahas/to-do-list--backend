require('dotenv').config();
const { MongoClient } = require('mongodb');

// Initial variables
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/TodoList`;
const DB_NAME = 'TodoList';
let db = null;

// Connection 
const connection = () => (
  db ? Promise.resolve(db) : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);

module.exports = connection;
