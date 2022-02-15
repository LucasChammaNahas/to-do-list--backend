const connection = require('./connection');

const get = async () => {
  const db = await connection();
  const todos = await db
    .collection('todos')
    .find()
    .toArray();
    return todos;
  };
  
  const update = async (body) => {
    const db = await connection();
    await db.collection('todos').deleteMany({});
    await db.collection('todos').insertMany(body);
  };
    
  module.exports = { get, update };
