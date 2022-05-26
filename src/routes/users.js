const routes = require('express').Router();
const users = require('../controllers/users');
const { saveUser } = require('../middleware/userValidation')


routes.get('/', saveUser, users.getUserInfo);
routes.put('/', saveUser, users.putUser);


module.exports = routes;
