import express from "express";
import { connectDB } from "./utils/features.js";

// Importing Routes
import userRoute from "./routes/user.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working with API with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);

// error handling middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
