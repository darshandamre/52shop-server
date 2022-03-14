import express from "express";
import { check } from "express-validator";
import { signup, login } from "../controllers/auth.js";
const router = express.Router();

// signup
router.post(
  "/signup",
  check(["name", "password"])
    .isLength({ min: 3 })
    .withMessage("must be atleast 3 characters long"),
  check("email").isEmail().withMessage("invalid email"),
  signup
);

// login
router.post(
  "/login",
  check("email").isEmail().withMessage("invalid email"),
  check("password")
    .isLength({ min: 3 })
    .withMessage("must be atleast 3 characters long"),
  login
);

export { router as authRouter };
