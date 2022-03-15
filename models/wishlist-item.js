import { sequelize } from "../db.js";
import { Product } from "./product.js";
import { User } from "./user.js";

const WishlistItem = sequelize.define("wishlist_item");

User.belongsToMany(Product, { through: WishlistItem });
Product.belongsToMany(User, { through: WishlistItem });

export { WishlistItem };
