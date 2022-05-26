const db = require('../models');
const favorites = db.favorites;

const getAll = async (req, res, next) => {
  try {
    const result = await favorites.find({'userEmail': req.email});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const getFromId = async (req, res, next) => {
  try {
    const result = await favorites.find( { 'mediaId': req.params.mediaId, 'userEmail': req.email });
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const postFavorite = async (req, res, next) => {
  try {
    //here is where we should code

    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const putFavorite = async (req, res, next) => {
  try {
  //here is where we should code

    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    const result = await favorites.findByIdAndRemove( req.params.id );
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

module.exports = {
  getAll,
  getFromId,
  postFavorite,
  putFavorite,
  deleteFavorite
}