import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function PostPage() {
  const [post, setPost] = useState(null);
  console.log(post);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/post/get/${id}`).then((response) => {
      response.json().then((post) => {
        setPost(post);
      });
    });
  }, [id]);

  if (!post) {
    // Render loading state or handle when post is null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="pb-5 pt-1 text-center text-5xl font-bold">{post.title}</h1>
      <p className="text-center text-xs font-normal text-gray-500">
        {formatISO9075(new Date(post.createdAt))}
      </p>
      <picture>
        <p className="text-left text-sm">by:</p>
        <img src={`http://localhost:3000/${post.cover}`} alt="" />
      </picture>
      <p className="pb-5 text-left">{post.summary}</p>
      <div
        className="text-left"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
