export default function Card() {
  return (
    <div className="max-w-lg  md:grid-cols-3">
      <div className=" card bg-base-100  p-2 shadow-xl sm:card-side md:p-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="md:card-body  sm:p-2 ">
          <h2 className="text-left font-bold sm:text-2xl md:text-3xl">
            New album is released!
          </h2>
          <p className="text-left md:text-xs xl:text-xs ">
            <a className="text-gray-800" href="">
              David Martinez
            </a>
            <time className="sm: pl-2 text-xs  font-medium text-gray-400">
              06-12-2023
            </time>
          </p>
          <p className="text-left">
            Click the button to listen on Spotiwhy app.
          </p>
          <div className="card-actions justify-start">
            <button className=" btn btn-primary w-full">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
