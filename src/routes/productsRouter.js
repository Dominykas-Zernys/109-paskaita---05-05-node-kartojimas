const express = require('express');
const {
  getProducts,
  postProduct,
  deleteProduct,
  getProductAmount,
} = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/products', getProducts);
productsRouter.post('/products', postProduct);
productsRouter.delete('/products/:id', deleteProduct);
productsRouter.get('/totalproducts', getProductAmount);

module.exports = productsRouter;
