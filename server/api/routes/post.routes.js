import express from "express";
import { createPost, getPosId, getPost } from "../controllers/post.controller.js";
import uploadMiddleware from "../middleware/multerConfig.js";
import { verifyToken } from "../middleware/verifyUser.js";

const router = express.Router();

router.post(
  "/create",
  uploadMiddleware.single("file"),
  verifyToken,
  createPost
);
router.get("/get", getPost);
router.get("/get/:id", getPosId);

export default router;
