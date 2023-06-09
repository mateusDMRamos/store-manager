const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const quantitySchema = Joi.number().integer().required();

module.exports = {
  idSchema,
  quantitySchema,
};