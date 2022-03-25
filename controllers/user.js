import { User, Product } from "../models/index.js";

const getUserInfo = async (req, res, next) => {
  let user;

  try {
    user = await User.findByPk(req.user.id, {
      include: [
        {
          model: Product,
          as: "wishlist",
          through: {
            attributes: []
          }
        },
        {
          model: Product,
          as: "cart",
          through: {
            attributes: ["quantity"]
          }
        }
      ]
    });
  } catch (err) {
    return next(err);
  }

  user.password = undefined;

  return res.json({
    user
  });
};

export { getUserInfo };
