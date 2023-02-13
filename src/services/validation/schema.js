const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.string().min(3).required();

module.exports = {
  idSchema,
  nameSchema,
};