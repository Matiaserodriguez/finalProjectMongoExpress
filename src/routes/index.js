const route = require('express').Router();
const books = require('./books');

route.use('/books', books);
module.exports = route;