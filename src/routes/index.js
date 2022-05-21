const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

const oauth = require('./oauth');
const token = require('./token')
const user = require('./users')
const accessToken = require('../middleware/accessToken')
const authorize = require('../middleware/authorize')

routes.use('/users', authorize.isAuthorized, user);
routes.use('/login/oauth/authorize', oauth);
routes.use('/api/session', accessToken.getAccessToken, token)

// Swagger routes
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
