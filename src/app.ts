import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import Stripe from "stripe";
import cors from "cors";

//its a middleware
import morgan from "morgan";

// Importing Routes
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/products.route.js";
import orderRoute from "./routes/order.route.js";
import paymentRoute from "./routes/payment.route.js";
import dashboardRoute from "./routes/stats.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);

// Caching the data or optimizing
export const myCache = new NodeCache();

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working with API with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use("/uploads", express.static("uploads"));

// error handling middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
