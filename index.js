require('dotenv').config();
const express = require('express');
const routes = require('./SRC/Router');

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening Port: ${PORT}`);
});
