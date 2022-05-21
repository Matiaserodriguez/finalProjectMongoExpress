const routes = require('express').Router();
const users = require('../controllers/usersController');


routes.get('/', users.getUserInfo);
routes.put('/', users.putUser);


module.exports = routes;
