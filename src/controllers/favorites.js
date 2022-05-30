const db = require('../models');
const favorites = db.favorites;


const getAll = async (req, res) => {
  try {
    const result = await favorites.find({'userEmail': req.email});
    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const getFromId = async (req, res) => {
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
    const mediaInDB = await favorites.find( { 'mediaId': req.body.mediaId, 'userEmail': req.email });

    if (mediaInDB && mediaInDB.length > 0) {
      res.status(200).json(mediaInDB);
      return;
    }

    const newFavorite = {
      userEmail: req.email,
      type: req.body.type,
      media: req.object,
      mediaId: req.body.mediaId
    }

    const newPost = new favorites(newFavorite);
    const result = await newPost.save(newPost);   

    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const putFavorite = async (req, res, next) => {
  try {
    const mediaInDB = await favorites.find( { 'mediaId': req.body.mediaId, 'userEmail': req.email });

    if (mediaInDB && mediaInDB.length > 0) {
      res.status(200).json(mediaInDB);
      return;
    }

    const newFavorite = {
      userEmail: req.email,
      type: req.body.type,
      media: req.object,
      mediaId: req.body.mediaId
    }

    const result = await newPost.save(favorite);

    res.status(200).json(result);

    res.status(200).json(result);
  } catch(e){
    console.log(e);
    res.status(400).json({msg:'Something went wrong try again'});
  }
};

const deleteFavorite = async (req, res) => {
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