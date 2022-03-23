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
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1
      }
    }
  },
  {
    timestamps: false
  }
);

User.belongsToMany(Product, { through: CartItem, as: "cart" });
Product.belongsToMany(User, { through: CartItem });

export { CartItem };
