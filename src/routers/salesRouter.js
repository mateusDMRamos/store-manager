const express = require('express');
const { salesController } = require('../controllers/index');
const { productIdCheck, validateSales } = require('../middlewares/validationMiddlewares');

const router = express.Router();

router.post('/', validateSales, productIdCheck, salesController.newSale);

module.exports = router;