const { productsModel } = require('../models/index');
const { validateQuantity } = require('../services/validation/validationInputValues');

const validateName = (name) => {
  if (!name) return { type: 400, message: '"name" is required' };
  if (name.length < 5) {
    return { type: 422, message: '"name" length must be at least 5 characters long' };
  } return { type: null, message: '' };
};

const productIdCheck = async (req, res, next) => {
  const products = req.body;
  const validatedProducts = await Promise.all(products.map(async (product) => {
    const productData = await productsModel.findProductById(product.productId);
    return productData;
  }));
  if (!validatedProducts.every((product) => product)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateSales = (req, res, next) => {
  const products = req.body;
  if (!products.every((product) => product.productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!products.every((product) => validateQuantity(product.quantity))) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (products.some((product) => product.quantity < 1)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateName,
  validateSales,
  productIdCheck,
};