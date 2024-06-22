import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

// Importing Routes
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/products.route.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working with API with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.use("/uploads", express.static("uploads"));

// error handling middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
