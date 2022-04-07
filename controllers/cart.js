import { sequelize } from "../db.js";
import { User, Product, CartItem, WishlistItem } from "../models/index.js";

const getCart = async (req, res, next) => {
  const { user } = req;
  try {
    const { cart } = await User.findByPk(user.id, {
      attributes: [],
      include: {
        model: Product,
        as: "cart",
        through: {
          attributes: ["quantity"]
        }
      }
    });

    return res.json({
      cart
    });
  } catch (err) {
    next(err);
  }
};

const addToCart = async (req, res, next) => {
  const { user, product } = req;

  try {
    await CartItem.create({
      userId: user.id,
      productId: product.id
    });
  } catch (err) {
    if (err.parent?.code === "23505") {
      return res.status(200).json({
        created: false,
        message: "product already in cart"
      });
    }
    return next(err);
  }

  return res.status(201).json({
    created: true,
    product: {
      ...product.dataValues,
      cartItem: {
        quantity: 1
      }
    }
  });
};

const deleteFromCart = async (req, res, next) => {
  const { user, product } = req;
  try {
    const deleted = await CartItem.destroy({
      where: {
        userId: user.id,
        productId: product.id
      }
    });

    if (!deleted) {
      return res.status(404).json({
        errors: [
          {
            name: "cart",
            message: "cart item not found"
          }
        ]
      });
    }
  } catch (err) {
    return next(err);
  }

  return res.status(204).end();
};

const incrementCartItemQuantity = async (req, res, next) => {
  const { user, product } = req;

  try {
    const [[[cartItem], updated]] = await CartItem.increment("quantity", {
      where: { userId: user.id, productId: product.id }
    });

    if (!updated) {
      return res.status(404).json({
        errors: [
          {
            name: "cart",
            message: "cart item not found"
          }
        ]
      });
    }

    return res.json({
      product: {
        ...product.dataValues,
        cartItem
      }
    });
  } catch (err) {
    return next(err);
  }
};

const decrementCartItemQuantity = async (req, res, next) => {
  const { user, product } = req;

  try {
    const [[[cartItem], updated]] = await CartItem.decrement("quantity", {
      where: {
        userId: user.id,
        productId: product.id
      }
    });

    if (!updated) {
      return res.status(404).json({
        errors: [
          {
            name: "cart",
            message: "cart item not found"
          }
        ]
      });
    }

    return res.json({
      product: {
        ...product.dataValues,
        cartItem
      }
    });
  } catch (err) {
    if (err.parent?.constraint === "greaterThanZero") {
      return res.status(422).json({
        errors: [
          {
            name: "constraint",
            message: "cannot decrease quantity below 1"
          }
        ]
      });
    }

    return next(err);
  }
};

const moveToCart = async (req, res, next) => {
  const { user, product } = req;

  const t = await sequelize.transaction();
  try {
    const deleted = await WishlistItem.destroy({
      where: {
        userId: user.id,
        productId: product.id
      },
      transaction: t
    });

    if (!deleted) {
      await t.rollback();
      return res.status(404).json({
        error: "product not in wishlist"
      });
    }

    const [, created] = await CartItem.findOrCreate({
      where: { userId: user.id, productId: product.id },
      transaction: t
    });

    if (created) {
      await t.commit();
      return res.status(201).json({
        created,
        product: {
          ...product.dataValues,
          cartItem: {
            quantity: 1
          }
        }
      });
    }

    const [[[cartItem]]] = await CartItem.increment("quantity", {
      where: { userId: user.id, productId: product.id },
      transaction: t
    });
    t.commit();

    return res.status(200).json({
      created,
      product: {
        ...product.dataValues,
        cartItem
      }
    });
  } catch (err) {
    await t.rollback();
    return next(err);
  }
};

export {
  getCart,
  addToCart,
  deleteFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  moveToCart
};
