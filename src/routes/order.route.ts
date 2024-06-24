import express from "express";
import { adminOnly } from "../middlewares/auth.middleware.js";
import { newOrder } from "../controllers/order.controller.js";

const app = express.Router();

// route- /api/v1/order/new
app.post("/new", newOrder);

export default app;
