import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Product } from "./product.js";
import { User } from "./user.js";

const { INTEGER } = DataTypes;

const CartItem = sequelize.define(
  "cartItem",
  {
    quantity: {
      type: INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

User.belongsToMany(Product, { through: CartItem, as: "cart" });
Product.belongsToMany(User, { through: CartItem });

export { CartItem };
