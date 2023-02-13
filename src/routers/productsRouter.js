const express = require('express');
const { productsControllers } = require('../controllers/index');

const router = express.Router();

router.get('/', productsControllers.getAllProds);

router.get('/:id', productsControllers.getProductById);

module.exports = router;