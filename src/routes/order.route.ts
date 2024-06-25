import express from "express";
import { adminOnly } from "../middlewares/auth.middleware.js";
import {
  allOrders,
  myOrders,
  newOrder,
} from "../controllers/order.controller.js";

const app = express.Router();

// route- /api/v1/order/new
app.post("/new", newOrder);

// route- /api/v1/order/my
app.get("/my", myOrders);

// route- /api/v1/order/all
app.get("/all", adminOnly, allOrders);

export default app;
