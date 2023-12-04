import express from "express";
import { checkAuth, logout, signin, signup } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/check-auth", verifyToken, checkAuth);
router.delete("/logout", logout);

export default router;
