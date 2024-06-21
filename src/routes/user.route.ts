import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  newUser,
} from "../controllers/user.controller.js";

const app = express.Router();

// route- /api/v1/user/new
app.post("/new", newUser);

// Route- /api/v1/user/all
app.get("/all", getAllUsers);

// Route- /api/v1/user/Dynamic ID
app.route("/:id").get(getUser).delete(deleteUser);

//or

// app.get("/:id", getUser);
// app.delete("/:id", deleteUser);

export default app;
