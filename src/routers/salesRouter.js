const express = require('express');
const { salesController } = require('../controllers/index');
const { productIdCheck, validateSales } = require('../middlewares/validationMiddlewares');

const router = express.Router();

router.post('/', validateSales, productIdCheck, salesController.newSale);

router.get('/', salesController.allSales);

router.get('/:id', salesController.findSaleById);

module.exports = router;