import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { User } from "./user.js";
import { Product } from "./product.js";

const { INTEGER } = DataTypes;

const CartItem = sequelize.define("cart_item", {
  quantity: {
    type: INTEGER,
    allowNull: false
  }
});

User.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(User, { through: CartItem });

export { CartItem };
