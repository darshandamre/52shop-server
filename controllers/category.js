import { Category } from "../models/index.js";

const getCategories = async (_, res) => {
  try {
    const categories = await Category.findAll({ limit: 30 });

    return res.json({
      data: { categories }
    });
  } catch (err) {
    console.error(err);
  }
};

export { getCategories };
