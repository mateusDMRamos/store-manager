const { productsModel } = require('../models/index');

const getAllProducts = async (_req, res) => {
  const products = await productsModel.findAllProducts();
  res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};