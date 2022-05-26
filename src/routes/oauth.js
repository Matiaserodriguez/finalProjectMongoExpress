const routes = require('express').Router();
const users = require('../controllers/users');


routes.get('/', users.getOauthUser);

module.exports = routes;
