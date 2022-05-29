const express = require('express');
const router = express.Router();

const bookOrMovie = require('../middleware/favoriteBookOrMovie');
const favoritesController = require('../controllers/favorites');


router.get('/', favoritesController.getAll);
router.get('/:id', favoritesController.getFromId);
router.post('/', bookOrMovie.validateBookOrMovie, favoritesController.postFavorite);
router.put('/', favoritesController.putFavorite);
router.delete('/:id', favoritesController.deleteFavorite);


module.exports = router;
