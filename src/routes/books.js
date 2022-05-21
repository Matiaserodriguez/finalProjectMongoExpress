const express = require('express');
const router = express.Router();
const books = require('../middleware/bookesValidation');

const contControl = require('../controllers/books');

router.get('/', contControl.getAll);
router.get('/:one', contControl.getSingle);


module.exports = router;