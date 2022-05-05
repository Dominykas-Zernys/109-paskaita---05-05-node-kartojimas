/* eslint-disable no-unused-expressions */
const { successResponse, failResponse } = require('../helper');
const {
  getProductsFromDb,
  addNewProductToDb,
  removeProductFromDb,
  countProductsFromDb,
} = require('../models/productsModel');

async function getProducts(req, res) {
  const allProducts = await getProductsFromDb();
  allProducts ? successResponse(res, allProducts) : failResponse(res);
}

async function postProduct(req, res) {
  const postedProduct = await addNewProductToDb(req.body);
  postedProduct.affectedRows
    ? successResponse(res, postedProduct)
    : failResponse(res);
}

async function deleteProduct(req, res) {
  const deletedProduct = await removeProductFromDb(req.params.id);
  deletedProduct.affectedRows
    ? successResponse(res, deletedProduct)
    : failResponse(res);
}

async function getProductAmount(req, res) {
  const productAmount = await countProductsFromDb();
  productAmount ? successResponse(res, productAmount) : failResponse(res);
}

module.exports = {
  getProducts,
  postProduct,
  deleteProduct,
  getProductAmount,
};
