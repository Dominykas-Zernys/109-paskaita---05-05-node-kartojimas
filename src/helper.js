require('dotenv').config();

function successResponse(res, data) {
  res.json({ success: true, data });
}

function failResponse(res, data) {
  res.json({ success: false, data });
}

const dbConfig = {
  database: process.env.DB_DB,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

module.exports = { successResponse, failResponse, dbConfig };
