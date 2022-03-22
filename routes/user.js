import express from "express";
import { isAuthenticated } from "../controllers/auth.js";
import { getUserInfo } from "../controllers/user.js";

const router = express.Router();

router.get("/user/get-info", isAuthenticated, getUserInfo);

export { router as userRouter };
