const routes = require('express').Router();
const token = require('../controllers/token');


routes.get('/', token.getToken);

module.exports = routes;
