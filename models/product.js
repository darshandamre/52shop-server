import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Category } from "./category.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

const Product = sequelize.define("product", {
  name: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING(600),
    allowNull: false
  },
  stock: {
    type: INTEGER,
    allowNull: false
  },
  price: {
    type: FLOAT,
    allowNull: false
  },
  discount: {
    type: FLOAT,
    allowNull: false
  },
  rating: {
    type: FLOAT,
    allowNull: false
  },
  pictureLink: {
    type: STRING,
    allowNull: false
  }
});

// relations
Product.belongsTo(Category);
Category.hasMany(Product);

export { Product };
