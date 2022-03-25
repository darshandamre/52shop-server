import argon2 from "argon2";
import cors from "cors";
import express from "express";
import { isAuthenticated } from "./controllers/auth.js";
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
  categoryRouter,
  wishlistRouter,
  cartRouter
} from "./routes/index.js";

const main = async () => {
  const app = express();
  const port = process.env.PORT ?? 4000;

  // check db
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("db connected");

  // await User.create({
  //   name: "ben",
  //   email: "ben@ben.com",
  //   password: await argon2.hash("ben")
  // });

  // await WishlistItem.bulkCreate([
  //   {
  //     userId: 1,
  //     productId: 1
  //   },
  //   {
  //     userId: 1,
  //     productId: 3
  //   },
  //   {
  //     userId: 1,
  //     productId: 6
  //   },
  //   {
  //     userId: 1,
  //     productId: 15
  //   }
  // ]);

  // await CartItem.bulkCreate([
  //   {
  //     userId: 1,
  //     productId: 2,
  //     quantity: 3
  //   },
  //   {
  //     userId: 1,
  //     productId: 4,
  //     quantity: 5
  //   },
  //   {
  //     userId: 1,
  //     productId: 8,
  //     quantity: 9
  //   },
  //   {
  //     userId: 1,
  //     productId: 13,
  //     quantity: 1
  //   }
  // ]);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/user", isAuthenticated);

  app.use("/api", authRouter);
  app.use("/api", userRouter);
  app.use("/api", productRouter);
  app.use("/api", categoryRouter);
  app.use("/api", wishlistRouter);
  app.use("/api", cartRouter);

  // error handling middleware functions must have four arguments
  app.use((err, _, res, __) => {
    console.error(err);
    return res.status(500).json({ error: err });
  });

  // start express server
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main().catch(err => console.error(err));
