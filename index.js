// import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { sequelize } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { userRouter } from "./routes/user.js";

const main = async () => {
  const app = express();
  const port = process.env.PORT ?? 4000;

  // check db
  await sequelize.authenticate();
  // await User.sync({ force: true });
  console.log("db connected");

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (_, res) => {
    res.send("Hello World!");
  });

  app.use("/api", authRouter);
  app.use("/api", userRouter);

  // start express server
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main().catch(err => console.error(err));
