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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = await productServices.setProductUpdate(id, name);
  res.status(product.type).json(product.message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const responseCode = await productServices.deleteInformedProduct(id);
  res.status(responseCode.type).send();
};

module.exports = {
  getAllProds,
  getProductById,
  newProduct,
  updateProduct,
  deleteProduct,
};