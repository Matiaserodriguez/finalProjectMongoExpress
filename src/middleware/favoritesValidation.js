const favoriteValidation = require('../helpers/validate');

const saveFavorite = (req, res, next) => {
  const validationRule = {
    type: 'required|string',
    mediaId: 'required|string'
  };
  favoriteValidation(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveFavorite
};
