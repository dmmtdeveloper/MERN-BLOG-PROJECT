import express from "express";
import { deteleUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";


const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deteleUser );


export default router;
