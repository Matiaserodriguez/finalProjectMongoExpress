const validate = require('../helpers/validate');

const saveBooks = (req, res, next) => {
  const validationRule = {
    Title: 'required|string',
    Author: 'required|string',
    Language: 'required|string',
    Date: 'required|string'
  };
  validate(req.body, validationRule, {}, (err, status) => {
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
  saveBooks
};