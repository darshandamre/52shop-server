import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const { STRING } = DataTypes;

const Category = sequelize.define("category", {
  name: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING
  },
  pictureLink: {
    type: STRING,
    allowNull: false
  }
});

export { Category };
