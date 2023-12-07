import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  // quill configuration
  const toolbarOptions = [
    // ["link", "image"],
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

 


  // state para redirigir a home page
  // const [redirect, setRedirect ]= useState(false)

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

 const handleCreateNewPost = async (e) => {
   e.preventDefault();

   const data = new FormData();
   data.set("title", title);
   data.set("summary", summary);
   data.set("content", content);
   data.append("file", files[0]);

   try {
     const response = await fetch("/api/post/create", {
       method: "POST",
       body: data,
       credentials: "include",
     });

     if (response.ok) {
       alert("Post creado con éxito");
       navigate("/");
     } else {
       console.error(
         "Error al crear el post. Código de estado:",
         response.status
       );
     }
   } catch (error) {
     console.error("Error en la solicitud:", error);
   }
 };


  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="flex max-w-sm flex-col text-center">
        <h1 className="text-4xl font-bold">Create Post 📸✨</h1>
        <p className="py-6">
          Puedes contar la historia detrás de la imagen o simplemente dejar que
          hable por sí misma. ¡La comunidad está ansiosa por ver tu talento y
          tus experiencias visuales!
        </p>
      </div>
      <form className="card-body" onSubmit={handleCreateNewPost}>
        <div className="flex flex-col gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered"
              type="title"
              id="title"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Summary</span>
            </label>
            <input
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="input input-bordered"
              type="summary"
              id="summary"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">
              <span className="label-text font-semibold">
                Upload your photo
              </span>
            </label>
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="file-input file-input-bordered w-full"
              type="file"
              id="image"
              accept="image/*"
              multiple
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Tell us your story</span>
          </label>

          <ReactQuill
            value={content}
            onChange={(newValue) => setContent(newValue)}
            theme="snow"
            modules={module}
            id="content"
          />
          <button className="btn btn-primary mt-5 w-full">CREATE POST</button>
        </div>
      </form>
    </div>
  );
}
