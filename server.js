import cors from "cors";
import express from "express";
import { sequelize } from "./db.js";
import {
  User,
  Category,
  Product,
  CartItem,
  WishlistItem
} from "./models/index.js";
import {
  authRouter,
  userRouter,
  productRouter,
  categoryRouter
} from "./routes/index.js";

const main = async () => {
  const app = express();
  const port = process.env.PORT ?? 4000;

  // check db
  await sequelize.authenticate();
  await sequelize.sync();
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
  app.use("/api", productRouter);
  app.use("/api", categoryRouter);

  // start express server
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main().catch(err => console.error(err));
