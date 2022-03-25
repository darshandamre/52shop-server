import { Router } from "express";
import {
  addToCart,
  decrementCartItemQuantity,
  deleteFromCart,
  getCart,
  incrementCartItemQuantity,
  moveToCart
} from "../controllers/cart.js";
import { findProductById } from "../controllers/product.js";

const router = Router();

router.param("productId", findProductById);

router.get("/user/cart", getCart);

router.post("/user/cart/:productId", addToCart);

router.delete("/user/cart/:productId", deleteFromCart);

router.post("/user/cart/increment/:productId", incrementCartItemQuantity);

router.post("/user/cart/decrement/:productId", decrementCartItemQuantity);

router.post("/user/move-to-cart/:productId", moveToCart);

export { router as cartRouter };
