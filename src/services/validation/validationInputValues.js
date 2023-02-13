const { idSchema } = require('./schema');

const PROD_NOT_FOUND = 400;

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: PROD_NOT_FOUND, message: 'Product not found' };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
};