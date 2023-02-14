const { productsModel } = require('../models');
const { validateId } = require('./validation/validationInputValues');
const { validateName } = require('../middlewares/validationMiddlewares');

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

const setProductUpdate = async (productId, productName) => {
  const product = await productsModel.updateProduct(productId, productName);
  if (product) return { type: 200, message: product };
  return { type: 500, message: 'Internal error' };
};

module.exports = {
  getAllProducts,
  findById,
  setNewProduct,
  setProductUpdate,
};