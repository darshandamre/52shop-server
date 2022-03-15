import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const { STRING } = DataTypes;

const Category = sequelize.define("category", {
  name: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false
  },
  pictueLink: {
    type: STRING,
    allowNull: false
  }
});

export { Category };
