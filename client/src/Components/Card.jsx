import {format} from 'date-fns'

export default function Card({ title, summary, cover, content, createdAt }) {
  
  return (
    <div className=" md:grid-cols-4">
      <div className=" card bg-base-100  p-2 shadow-xl sm:card-side md:p-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="md:card-body  sm:p-2 ">
          <h2 className="text-left font-bold sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="text-left flex flex-col md:text-xs xl:text-xs ">
            <a className="text-gray-800" href="">
              David Martinez
            </a>
            <time className="sm:  text-xs  font-medium text-gray-400">
              {format(new Date(createdAt), 'dd-MM-yyy')}
            </time>
          </p>
          <p className="text-left">{summary}</p>
          <div className="card-actions justify-start">
            <button className=" btn btn-primary w-full">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
