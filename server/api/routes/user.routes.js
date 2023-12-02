import express from "express";
import {
  userCreate,
  userFind,
  userUpdate,
  userDelete,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", userCreate);
router.get("/find", userFind);
router.put("/update/:id", userUpdate);
router.delete("/delete/:id", userDelete);

export default router;
