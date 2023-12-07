// post.controller.js
import Post from "../models/post.models.js";
import fs from "fs";

export const createPost = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se ha cargado ningún archivo" });
    }

    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { title, summary, content } = req.body;
    const idAuthor = req.user._id; // Capturar el _id del usuario autenticado
    console.log(idAuthor)
    
    const postDoc = await Post.create({
      title,
      summary,
      content,
      idAuthor,
      cover: newPath,
    });
    

    res.json(postDoc);
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(20);
  res.status(200).json(posts);
};

export const getPosId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const postDoc = await Post.findById(id);
    res.status(200).json(postDoc);
  } catch (error) {
    next(error);
  }
};
