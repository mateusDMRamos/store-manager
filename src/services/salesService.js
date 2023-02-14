const { salesModel } = require('../models/index');

const setNewSales = async (products) => {
  const date = new Date();
  const id = await salesModel.writeNewSales(date);
  const itemsSold = await Promise.all(products.map(async (product) => {
    await salesModel.writeNewProductSales(product, id);
    return product;
  }));
  return { id, itemsSold };
};

const getAllSales = async () => {
  const sales = await salesModel.findAllSales();
  return { type: null, message: sales };
};

const getSaleById = async (saleId) => {
  const product = await salesModel.findSaleById(saleId);
  console.log(product);
  if (product.length) return { type: null, message: product };
  return { type: 404, message: 'Sale not found' };
};

module.exports = {
  setNewSales,
  getAllSales,
  getSaleById,
};