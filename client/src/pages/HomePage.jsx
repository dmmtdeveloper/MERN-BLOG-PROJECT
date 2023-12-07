import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("api/post/get").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts)
      });
    });
  }, []);

  return (
    <div className=" ">
      <p className="text-left pb-5 text-1xl text-gray-500">bienvenido: {currentUser.name}</p>

      <div className="md: flex grid-cols-2 flex-col  gap-5 lg:grid">
        {posts.length > 0 &&
          posts.map((post, index) => <Card {...post} key={index} />)}
      </div>
    </div>
  );
}
