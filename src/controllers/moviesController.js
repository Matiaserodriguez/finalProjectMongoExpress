const db = require('../models');
const moviesController = db.movies;

const getAll = async (req, res, next) => {
  try {
    const result = await moviesController.find({});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const findByName = async (req, res, next) => {
  try {
    const result = await moviesController.find( { 'movieName' : { '$regex' : req.params.name, '$options' : 'i' } } );
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something wnt wrong try again'});
  }
}

const findByRate = async (req, res, next) => {
  try {
    const result = await moviesController.findOne({'year': { '$regex' : req.params.year, '$options' : 'i' } } );
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something wnt wrong try again'});
  }
}

module.exports = {
  getAll,
  findByName,
  findByRate,
}
