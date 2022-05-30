const express = require('express');
const router = express.Router();

const contControl = require('../controllers/books');

router.get('/', contControl.getAll);
router.get('/getId/:_id', contControl.getSingle);
router.get('/author/:Author', contControl.getAuthor);
router.get('/title/:title', contControl.getTitle);

module.exports = router;