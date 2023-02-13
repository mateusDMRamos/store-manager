const express = require('express');
const { productsControllers } = require('../controllers/index');

const router = express.Router();

router.get('/', productsControllers.getAllProds);

router.get('/:id', productsControllers.getProductById);

router.post('/', productsControllers.newProduct);

module.exports = router;