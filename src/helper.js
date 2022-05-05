require('dotenv').config();
const Joi = require('joi');

// Server responses

function successResponse(res, data) {
  res.json({ success: true, data });
}

function failResponse(res, data) {
  res.json({ success: false, data });
}

// Database config

const dbConfig = {
  database: process.env.DB_DB,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

// Joi validation

async function validateNewProduct(req, res, next) {
  const schema = Joi.object({
    image_url: Joi.string().min(3).required(),
    title: Joi.string().min(2),
    description: Joi.string().min(5),
    price: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errorArr = error.details.map((errorDetail) => errorDetail.message);
    failResponse(res, errorArr);
  }
}

module.exports = {
  successResponse,
  failResponse,
  dbConfig,
  validateNewProduct,
};
