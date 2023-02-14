const express = require('express');
const { productsControllers } = require('../controllers/index');
const {
  singleProductCheck,
  deleteProductIdCheck,
} = require('../middlewares/validationMiddlewares');

const router = express.Router();

router.get('/', productsControllers.getAllProds);

router.get('/:id', productsControllers.getProductById);

router.post('/', productsControllers.newProduct);

router.put('/:id', singleProductCheck, productsControllers.updateProduct);

router.delete('/:id', deleteProductIdCheck, productsControllers.deleteProduct);

module.exports = router;