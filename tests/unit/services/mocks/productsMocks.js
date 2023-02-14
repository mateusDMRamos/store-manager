const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  },
];

const singleProduct = {
  id: 1,
  name: 'Martelo de Thor'
};

const newProduct = {
  id: 4,
  name: 'product X'
}

const idError = { type: 404, message: 'Product not found' };

module.exports = {
  allProducts,
  idError,
  singleProduct,
  newProduct,
}