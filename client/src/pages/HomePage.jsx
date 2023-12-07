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
      <p className="text-1xl pb-5 text-left text-gray-500">
        Welcome :{currentUser.name}
      </p>

      <div className=" md:grid-cols-2  flex-col gap-10 lg:grid">
        {posts.length > 0 &&
          posts.map((post, index) => <Card {...post} key={index} />)}
      </div>
    </div>
  );
}
