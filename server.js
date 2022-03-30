import cors from "cors";
import "dotenv/config";
import express from "express";
import { isAuthenticated } from "./controllers/auth.js";
import { sequelize } from "./db.js";
import {
  authRouter,
  cartRouter,
  categoryRouter,
  productRouter,
  userRouter,
  wishlistRouter
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
