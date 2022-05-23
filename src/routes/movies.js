const express = require('express');
const router = express.Router();

const contControl = require('../controllers/moviesController');

router.get('/', contControl.getAll);
router.get('/:id', contControl.getSingle);


module.exports = router;