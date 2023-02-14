const { salesService } = require('../services/index');

const newSale = async (req, res) => {
  const products = req.body;
  const sale = await salesService.setNewSales(products);
  res.status(201).json(sale);
};

module.exports = {
  newSale,
};
