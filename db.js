import dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

export { sequelize };
