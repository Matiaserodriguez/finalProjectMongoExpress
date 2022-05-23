const db = require('../models');
const movies = db.movies;

const getAll = async (req, res, next) => {
  try {
    const result = await movies.find({});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const getSingle = async (req, res, next) => {

  try {
    const result = await movies.findOne({id: req.params.id});
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
