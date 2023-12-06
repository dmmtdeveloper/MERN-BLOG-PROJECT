import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  Author: String,
  idAuthor: { type: mongoose.Types.ObjectId, ref: "authors" },
});

const Author = mongoose.model("posts", AuthorSchema);

export default Author;
