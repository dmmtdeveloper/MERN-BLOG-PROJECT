// post.controller.js
import Post from "../models/post.models.js";
import fs from "fs";

export const createPost = async (req, res, next) => {
  // configuracion de file image
  const { originalname, path } = req.file;
  const parts = originalname.split("_");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { title, summary, content } = req.body;
  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover: newPath,
  });
  res.json(postDoc);
};

export const getPost = async (req, res, next) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(20);
  res.status(200).json(posts);
};

export const getPosId = async (req, res, next) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate();
  res.status(200).json(postDoc);
};
