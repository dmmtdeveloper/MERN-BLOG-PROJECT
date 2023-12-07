import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Card({ _id, title, summary, cover, createdAt }) {
  return (
    <div className=" shadow-2md lg:w-2/ h-min shadow-md dark:bg-gray-800">
      <figure className="h-2/3">
        <Link to={`/post/${_id}`}>
          <img
            src={`http://localhost:3000/${cover}`}
            alt="car!"
            className="h-full w-full object-cover opacity-50 transition duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      </figure>
      <div className="pl-5">
        <h2 className=" pt-5 text-left text-4xl font-bold">{title}</h2>
        <p className="pt-1 text-left text-sm">
          {format(new Date(createdAt), "dd-MM-yyy")}
        </p>
        <p className="text-left">{summary}</p>
        <div className="card-actions mx-5 mb-5 justify-end">
          <Link to={`/post/${_id}`}>
            <button className="btn btn-primary  w-full">Show now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
