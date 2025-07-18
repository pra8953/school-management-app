const joi = require('joi');

const teacherValidation = async (req, res, next) => {
  try {
    const schema = joi.object({
      name: joi.string().trim().min(3).max(50).required(),
      subject: joi.string().trim().required(),
      designation: joi.string().trim().required(),
      bio: joi.string().trim().required(),
      image: joi.string().trim().required(),
     
     
     
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

module.exports = teacherValidation;
