import express from "express";
import { adminOnly } from "../middlewares/auth.middleware.js";
import { applyDiscount, newCoupon } from "../controllers/payment.controller.js";

const app = express.Router();

app.post("/coupon/new", newCoupon);

app.get("/discount", applyDiscount);

export default app;
