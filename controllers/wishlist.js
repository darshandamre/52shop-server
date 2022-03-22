import { User, Product, WishlistItem } from "../models/index.js";

const getWishlist = async (req, res, next) => {
  try {
    const { wishlist } = await User.findByPk(req.user.id, {
      attributes: [],
      include: {
        model: Product,
        as: "wishlist",
        through: {
          attributes: []
        }
      }
    });

    return res.json({
      wishlist
    });
  } catch (err) {
    return next(err);
  }
};

const addToWishlist = async (req, res, next) => {
  const { user, product } = req;

  try {
    await WishlistItem.create({
      userId: user.id,
      productId: product.id
    });
  } catch (err) {
    if (err.parent.code === "23505") {
      return res.status(400).json({
        error: "product already in wishlist"
      });
    }
    return next(err);
  }

  return res.json({
    product
  });
};

const deleteFromWishlist = async (req, res, next) => {
  const { user, product } = req;

  try {
    const deleted = await WishlistItem.destroy({
      where: {
        userId: user.id,
        productId: product.id
      }
    });

    if (!deleted) {
      return res.status(404).json({
        error: "product does not exist in wishlist"
      });
    }
  } catch (err) {
    return next(err);
  }

  return res.status(204).send();
};

// TODO: move from cart to wishlist
const moveToWishlist = () => {};

export { getWishlist, addToWishlist, deleteFromWishlist, moveToWishlist };
