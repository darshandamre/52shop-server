import express from "express";
import { isAuthenticated } from "../controllers/auth.js";
import { me } from "../controllers/user.js";

const router = express.Router();

router.get("/user/me", isAuthenticated, me);

export { router as userRouter };
