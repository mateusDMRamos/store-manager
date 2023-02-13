const { productsModel } = require('../models');
const { validateId, validateName } = require('./validation/validationInputValues');

const getAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;
  const product = await productsModel.findProductById(productId);
  if (product) return { type: null, message: product };
  return { type: 404, message: 'Product not found' };
};

const setNewProduct = async (productName) => {
  const error = validateName(productName);
  if (error.type) return error;
  const product = await productsModel.writeNewProduct(productName);
  if (product) return { type: null, message: product };
  return { type: 404, message: 'Product not found' };
};

module.exports = {
  getAllProducts,
  findById,
  setNewProduct,
};