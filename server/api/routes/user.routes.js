import express from "express";
import {
  CreateUser,
  deleteUser,
  getOneUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", CreateUser);
router.get("/get", getUser);
router.get("/getOne/:id", getOneUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
