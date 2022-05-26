const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

const oauth = require('./oauth');
const token = require('./token');
const user = require('./users');
const books = require('./books');
const movies = require('./movies');
const favorites = require('./favorites');
const accessToken = require('../middleware/accessToken');
const authorize = require('../middleware/authorize');


routes.use('/users', authorize.isAuthorized, user);
routes.use('/login/oauth/authorize', oauth);
routes.use('/api/session', accessToken.getAccessToken, token);
routes.use('/books', authorize.isAuthorized, books);
routes.use('/movies', authorize.isAuthorized, movies);
routes.use('/favorites', authorize.isAuthorized, favorites);

// Swagger routes
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
