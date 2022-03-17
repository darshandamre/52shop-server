import cors from "cors";
import express from "express";
import { sequelize } from "./db.js";
import { CartItem } from "./models/cart-item.js";
import { Category } from "./models/category.js";
import { Product } from "./models/product.js";
import { User } from "./models/user.js";
import { WishlistItem } from "./models/wishlist-item.js";
import { authRouter } from "./routes/auth.js";
import { userRouter } from "./routes/user.js";

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

  // start express server
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main().catch(err => console.error(err));
