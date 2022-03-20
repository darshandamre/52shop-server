import { Product } from "../models/index.js";

const getProducts = async (_, res) => {
  try {
    const products = await Product.findAll({ limit: 30 });
    return res.json({
      data: {
        products
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export { getProducts };
