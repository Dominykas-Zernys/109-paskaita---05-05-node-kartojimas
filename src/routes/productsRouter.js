const express = require('express');
const {
  getProducts,
  postProduct,
  deleteProduct,
  getProductAmount,
} = require('../controllers/productsController');
const { validateNewProduct } = require('../helper');

const productsRouter = express.Router();

productsRouter.get('/products', getProducts);
productsRouter.post('/products', validateNewProduct, postProduct);
productsRouter.delete('/products/:id', deleteProduct);
productsRouter.get('/totalproducts', getProductAmount);

module.exports = productsRouter;
