import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Card({_id, title, summary, cover, createdAt }) {
  return (
    <div className="card glass h-full lg:w-2/3">
      <figure className="h-2/3">
        <Link to={`/post/${_id}`}>
          <img
            src={`http://localhost:3000/${cover}`}
            alt="car!"
            className="h-full w-full object-cover"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="text-left text-sm">
          {format(new Date(createdAt), "dd-MM-yyy")}
        </p>
        <p className="text-left">{summary}</p>
        <div className="card-actions justify-end">
          <Link to={`/post/${_id}`}>
            <button className="btn btn-primary">Show now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
