import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
  });
  const { content, title, summary } = post;
  const [file, setFile] = useState("");

  const toolbarOptions = [
    ["link", "image"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic"],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];
  const module = {
    toolbar: toolbarOptions,
  };

  const handleSubmitNewPost = (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    e.preventDefault();
    fetch("/api/post/create", {
      method: "POST",
      body: "Content-Type",
    });
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmitNewPost}>
      <div className="flex flex-col gap-2">
        <input
          value={title}
          onChange={handleChange}
          className="input input-bordered"
          type="title"
          placeholder={"Title"}
          id="title"
        />
        <input
          value={summary}
          onChange={handleChange}
          className="input input-bordered"
          type="summary"
          placeholder={"Summary"}
          id="summary"
        />
        <input
          value={file}
          className="rounded-lg p-2"
          type="file"
          onChange={handleChange}
          id="file"
        />
      </div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        theme="snow"
        modules={module}
        id="content"
      />
      <button className="btn btn-primary mt-5 w-full">CREATE POST</button>
    </form>
  );
}
