const { idSchema, nameSchema } = require('./schema');

const PROD_NOT_FOUND = 400;
const INVALID_NAME = 400;

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: PROD_NOT_FOUND, message: 'Product not found' };
  return { type: null, message: '' };
};

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  if (error) return { type: INVALID_NAME, message: 'Product not found' };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};