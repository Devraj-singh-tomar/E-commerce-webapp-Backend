import express from "express";
import { adminOnly } from "../middlewares/auth.middleware.js";
import {
  getAllCategories,
  getLatestProducts,
  newProduct,
} from "../controllers/product.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);

app.get("/latest", getLatestProducts);

app.get("/categories", getAllCategories);

export default app;
