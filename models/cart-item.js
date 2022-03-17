import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Product } from "./product.js";
import { User } from "./user.js";

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
