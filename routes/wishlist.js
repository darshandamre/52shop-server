import { Router } from "express";
import { isAuthenticated } from "../controllers/auth.js";
import { findProductById } from "../controllers/product.js";
import {
  addToWishlist,
  deleteFromWishlist,
  getWishlist,
  moveToWishlist
} from "../controllers/wishlist.js";

const router = Router();

router.use(isAuthenticated);

router.param("productId", findProductById);

router.get("/user/wishlist", getWishlist);

router.post("/user/wishlist/:productId", addToWishlist);

router.delete("/user/wishlist/:productId", deleteFromWishlist);

router.post("/user/move-to-wishlist/:productId", moveToWishlist);

export { router as wishlistRouter };
