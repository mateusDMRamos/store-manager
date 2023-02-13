const { productServices } = require('../services/index');

const getAllProds = async (_req, res) => {
  const products = await productServices.getAllProducts();
  res.status(200).json(products.message);
};

const getProductById = async (req, res) => {
  const id = Number(req.params.id);
  const product = await productServices.findById(id);
  if (product.type) return res.status(product.type).json({ message: product.message });
  res.status(200).json(product.message);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productServices.setNewProduct(name);
  if (product.type) return res.status(product.type).json({ message: product.message });
  return res.status(201).json(product.message);
};

module.exports = {
  getAllProds,
  getProductById,
  newProduct,
};