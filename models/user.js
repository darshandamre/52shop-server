import Sequelize from "sequelize";
import { sequelize } from "../db.js";

const { STRING } = Sequelize;

const User = sequelize.define("user", {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: STRING,
    allowNull: false
  }
});

export { User };
