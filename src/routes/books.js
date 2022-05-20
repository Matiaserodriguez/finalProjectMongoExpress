const express = require('express');
const router = express.Router();

const contControl = require('../controllers/books');

router.get('/', saveBooks, contControl.getAll);

router.get('/:one',saveBooks, contControl.getSingle);
