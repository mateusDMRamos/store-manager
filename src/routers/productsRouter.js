const express = require('express');
const { productsControllers } = require('../controllers/index');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);

// router.post('/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   const product = await findProductById(id);
//   console.log(product);
//   res.status(200).json(product);
// });

module.exports = router;