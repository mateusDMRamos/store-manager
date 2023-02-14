// const camelize = require('camelize');
const connection = require('../connection');

const writeNewSales = async (date) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );
  return insertId;
};
const writeNewProductSales = async (product, insertId) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES (?, ?, ?) ',
    [product.productId, insertId, product.quantity],
  );
};

module.exports = {
  writeNewSales,
  writeNewProductSales,
};