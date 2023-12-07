import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Card({_id, title, summary, cover, createdAt }) {
  return (
    <div className=" h-min shadow-2md lg:w-2/3">
      <figure className="h-2/3">
        <Link to={`/post/${_id}`}>
          <img
            src={`http://localhost:3000/${cover}`}
            alt="car!"
            className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110 opacity-60"
          />
        </Link>
      </figure>
      <div className="">
        <h2 className=" text-left text-4xl pt-3">{title}</h2>
        <p className="text-left text-sm pt-1">
          {format(new Date(createdAt), "dd-MM-yyy")}
        </p>
        <p className="text-left">{summary}</p>
        <div className="card-actions justify-end mb-10 mx-5">
          <Link to={`/post/${_id}`}>
            <button className="btn btn-primary  w-full">Show now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
