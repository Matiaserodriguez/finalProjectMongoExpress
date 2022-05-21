const dbConfig = require('../db/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require('./users.js')(mongoose);
// db.movies = require('./movies.js')(mongoose);
db.books = require('./books.js')(mongoose);
// db.favorites = require('./favorites.js')(mongoose);

module.exports = db;
