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

module.exports = {
  setNewSales,
};