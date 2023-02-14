const express = require('express');
const { productsControllers } = require('../controllers/index');
const { singleProductCheck } = require('../middlewares/validationMiddlewares');

const router = express.Router();

router.get('/', productsControllers.getAllProds);

router.get('/:id', productsControllers.getProductById);

router.post('/', productsControllers.newProduct);

router.put('/:id', singleProductCheck, productsControllers.updateProduct);

module.exports = router;