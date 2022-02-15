const express = require('express');
const Controller = require('../Controllers');
const routes = express.Router();

routes.get('/get', Controller.get);
routes.post('/post', Controller.update);

module.exports = routes;
