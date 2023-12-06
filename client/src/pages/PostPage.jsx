import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`/api/post/get/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>PostPage</div>;
}
