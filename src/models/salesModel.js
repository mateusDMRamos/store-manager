const camelize = require('camelize');
const connection = require('../connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sa.id AS 'saleId', sa.date, sp.product_id as 'productId', sp.quantity
      FROM sales AS sa INNER JOIN sales_products AS sp
      ON sa.id = sp.sale_id`,
  );
  return camelize(sales);
};

const findSaleById = async (saleId) => {
  const [sales] = await connection.execute(
    `SELECT sa.date, sp.product_id as 'productId', sp.quantity
      FROM sales AS sa INNER JOIN sales_products AS sp
      ON sa.id = sp.sale_id
      WHERE sa.id = (?)`,
    [saleId],
  );
  return camelize(sales);
};

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
  findAllSales,
  findSaleById,
};