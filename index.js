import dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";
import express from "express";

const main = async () => {
  const app = express();
  const port = process.env.PORT ?? 4000;

  const sequelize = new Sequelize(process.env.DATABASE_URI);

  await sequelize.authenticate();
  console.log("db connected");

  // var User = sequelize.define(
  //   "user",
  //   {
  //     firstName: {
  //       type: Sequelize.STRING,
  //       field: "first_name" // Will result in an attribute that is firstName when user facing but first_name in the database
  //     },
  //     lastName: {
  //       type: Sequelize.STRING
  //     }
  //   },
  //   {
  //     freezeTableName: true // Model tableName will be the same as the model name
  //   }
  // );

  // User.sync({ force: true }).then(function () {
  //   // Table created
  //   return User.create({
  //     firstName: "John",
  //     lastName: "Hancock"
  //   });
  // });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main().catch(err => console.log(err));
