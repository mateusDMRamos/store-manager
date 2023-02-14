const camelize = require('camelize');
const connection = require('../connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return camelize(result);
};

const findProductById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const writeNewProduct = async (productName) => {
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [productName],
  );
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?',
    [productName],
  );
  return product;
};

const updateProduct = async (productId, productName) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?) ',
    [productName, productId],
  );
  return { id: productId, name: productName };
};

module.exports = {
  findAllProducts,
  findProductById,
  writeNewProduct,
  updateProduct,
};