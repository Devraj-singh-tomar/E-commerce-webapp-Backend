import express from "express";
import { adminOnly } from "../middlewares/auth.middleware.js";
import { newCoupon } from "../controllers/payment.controller.js";

const app = express.Router();

app.post("/coupon/new", newCoupon);

export default app;
