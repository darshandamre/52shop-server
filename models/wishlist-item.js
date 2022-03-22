import { sequelize } from "../db.js";
import { Product } from "./product.js";
import { User } from "./user.js";

const WishlistItem = sequelize.define(
  "wishlistItem",
  {},
  {
    timestamps: false
  }
);

User.belongsToMany(Product, { through: WishlistItem, as: "wishlist" });
Product.belongsToMany(User, { through: WishlistItem });

export { WishlistItem };
