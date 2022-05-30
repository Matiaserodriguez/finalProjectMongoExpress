const db = require('../models');
const books = db.books;

const getAll = async (req, res, next) => {
  try {
    const result = await books.find({});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const getSingle = async (req, res, next) => {

  try {
    const result = await books.findOne({_id: req.params._id});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
} 

const getAuthor = async (req, res, next) => {

  try {
    console.log(req.params.Author);
    const result = await books.find({'Author': req.params.Author});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
} 

const getTitle = async (req, res, next) => {

  try {
    const result = await books.find({'Title': req.params.Tilte});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
} 
module.exports = {
    getAll,
    getSingle,
    getTitle,
    getAuthor
}
