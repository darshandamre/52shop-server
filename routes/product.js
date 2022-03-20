import express from "express";
import { getProducts } from "../controllers/product.js";

const router = express.Router();

router.get("/products", getProducts);

export { router as productRouter };
