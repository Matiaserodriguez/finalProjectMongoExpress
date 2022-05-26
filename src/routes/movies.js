const express = require('express');
const router = express.Router();

const contControl = require('../controllers/moviesController');

router.get('/', contControl.getAll);
router.get('/movieName/:name', contControl.findByName);
router.get('/releasedYear/:year', contControl.findByRate);

module.exports = router;