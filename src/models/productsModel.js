/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
const mysql = require('mysql2/promise');
const { dbConfig } = require('../helper');

async function getProductsFromDb() {
  try {
    const sql = 'SELECT * FROM products';
    const conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.query(sql);
    await conn.close();
    return result;
  } catch (error) {
    console.log('getProductsFromDb', error);
    return false;
  }
}

async function addNewProductToDb(dataToSend) {
  try {
    const imageUrl = dataToSend.image_url;
    const { title, description, price } = dataToSend;
    const sql =
      'INSERT INTO products (image_url, title, description, price) VALUES(?,?,?,?)';
    const conn = await mysql.createConnection(dbConfig);
    console.log([imageUrl, title, description, price]);
    const [result] = await conn.execute(sql, [
      imageUrl,
      title,
      description,
      price,
    ]);
    await conn.close();
    return result;
  } catch (error) {
    console.log('addNewProductToDb', error);
    return false;
  }
}

async function removeProductFromDb(idToDelete) {
  try {
    const sql = 'DELETE FROM products WHERE id=?';
    const conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, [idToDelete]);
    await conn.close();
    return result;
  } catch (error) {
    console.log('removeProductFromDb', error);
    return false;
  }
}

async function countProductsFromDb() {
  try {
    const sql = 'SELECT COUNT(*) AS total_products FROM products';
    const conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.query(sql);
    await conn.close();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  getProductsFromDb,
  addNewProductToDb,
  removeProductFromDb,
  countProductsFromDb,
};
