const joi = require('joi');

const eventValidation = async (req, res, next) => {
  try {
    const schema = joi.object({
      title: joi.string().trim().min(3).max(250).required(),
      description: joi.string().trim().required(),
      shortDescription: joi.string().trim().required(),
      date: joi.date().required(),
      location: joi.string().trim().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        success: false,
      });
    }

    next();
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

module.exports = eventValidation;
