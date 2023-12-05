// post.model.js
import moongose from "mongoose";
const PostSchema = new moongose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const Post = moongose.model("Post", PostSchema);

export default Post;
