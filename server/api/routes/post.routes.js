// post.routes.js
import express from "express";
import { createPost } from "../controllers/post.controller.js";
import uploadMiddleware from "../middleware/multerConfig.js";
import { verifyToken } from "../middleware/verifyUser.js";

const router = express.Router();

router.post(
  "/create",
  uploadMiddleware.single("file"),
  verifyToken,
  createPost
);

export default router;
