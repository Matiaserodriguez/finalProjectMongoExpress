const mongodb = require('../db/db.config');
const mongoose = require('mongoose');
const db = require('../models');
const books = db.books;
const apiKey =
  'API KEY';

const getAll = async (req, res, next) => {
  if (req.header('apiKey') === apiKey){
    const result = await books.find({});
    res.status(200).json(result);
  }else {
    res.send('Invalid apiKey, please read the documentation.');
  }
  
  
};

const getSingle = async (req, res, next) => {
  if (req.header('apiKey') === apiKey){
    const result = await books.findOne({one: req.params.one});
    res.status(200).json(result);
  }else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};
module.exports = {
    getAll,
    getSingle,
}
