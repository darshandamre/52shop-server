import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const { STRING } = DataTypes;

const User = sequelize.define(
  "user",
  {
    name: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: STRING,
      allowNull: false
    }
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["email"]
      }
    ]
  }
);

export { User };
