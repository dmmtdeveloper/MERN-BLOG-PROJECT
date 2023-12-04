import express from "express";
import { checkAuth, login, logout, signup } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/check-auth", verifyToken, checkAuth);
router.delete("/logout", logout);

export default router;
