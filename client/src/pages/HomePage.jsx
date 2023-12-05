import { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("api/post/get").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div className=" md: mx-auto flex grid-cols-2 flex-col items-center gap-5 lg:grid">
      {posts.length > 0 &&
        posts.map((post, index) => <Card {...post} key={index} />)}

        <Card/>
    </div>
  );
}
