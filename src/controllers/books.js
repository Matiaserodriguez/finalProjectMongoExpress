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
    const result = await books.findOne({one: req.params.one});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something wnt wrong try again'});
  }
} 
module.exports = {
    getAll,
    getSingle,
}
