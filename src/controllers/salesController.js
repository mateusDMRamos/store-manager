const { salesService } = require('../services/index');

const newSale = async (req, res) => {
  const products = req.body;
  const sale = await salesService.setNewSales(products);
  res.status(201).json(sale);
};

const allSales = async (_req, res) => {
  const sales = await salesService.getAllSales();
  res.status(200).json(sales.message);
};

const findSaleById = async (req, res) => {
  const sale = await salesService.getSaleById(req.params.id);
  if (!sale.type) return res.status(200).json(sale.message);
  res.status(404).json({ message: sale.message });
};

module.exports = {
  newSale,
  allSales,
  findSaleById,
};
