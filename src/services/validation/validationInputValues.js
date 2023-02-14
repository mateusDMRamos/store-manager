const { idSchema, quantitySchema } = require('./schema');

const PROD_NOT_FOUND = 400;

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: PROD_NOT_FOUND, message: 'Product not found' };
  return { type: null, message: '' };
};

const validateQuantity = (quantity) => {
  const { error } = quantitySchema.validate(quantity);
  if (error) return false;
  return true;
};

module.exports = {
  validateId,
  validateQuantity,
};