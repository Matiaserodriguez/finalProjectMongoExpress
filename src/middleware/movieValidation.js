const movieValidation = require('../helpers/validate');

const saveMovie = (req, res, next) => {
  const validationRule = {
    movieName: 'required|string',
    director: 'required|string',
    releaseYear: 'required|date',
    category: 'required|string',
    cast: 'required|string',
    length: 'required|string',
    summary: 'required|string'
  };
  movieValidation(req.body, validationRule, {}, (err, status) => {
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
  saveMovie
};
