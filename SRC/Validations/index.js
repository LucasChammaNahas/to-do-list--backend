const Joi = require('joi');

const validationSchema = Joi.array().items(
  Joi.object({
    timestamp: Joi.number().required(),
    status: Joi.string().required(),
    msg: Joi.string().required(),
  })
).required()

module.exports = { validationSchema };
