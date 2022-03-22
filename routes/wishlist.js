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

router.param("productId", findProductById);

router.get("/user/wishlist", isAuthenticated, getWishlist);

router.post("/user/wishlist/:productId", isAuthenticated, addToWishlist);

router.delete("/user/wishlist/:productId", isAuthenticated, deleteFromWishlist);

router.post(
  "/user/move-to-wishlist/:productId",
  isAuthenticated,
  moveToWishlist
);

export { router as wishlistRouter };
