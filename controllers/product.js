import { Product } from "../models/index.js";

const findProductById = async (req, res, next, productId) => {
  let product;
  try {
    product = await Product.findByPk(productId);
  } catch (err) {
    return next(err);
  }
  if (!product) {
    return res.status(404).json({
      error: "product not found"
    });
  }

  req.product = product;
  return next();
};

const getProducts = async (_, res, next) => {
  let products;

  try {
    products = await Product.findAll({ limit: 30 });
  } catch (err) {
    return next(err);
  }

  return res.json({
    products
  });
};

export { findProductById, getProducts };
