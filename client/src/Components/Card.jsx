export default function Card() {
  return (
    <div className="md:grid-cols-3 max-w-lg grid-cols-1">
      <div className="card sm:card-side  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="md:card-body  sm:p-2">
          <h2 className=" card-title text-2xl font-bold text-left">New album is released!</h2>
          <p className="xl:text-xs md:text-xs  text-left flex gap-2 text-gray-400 font-medium">
            <a className="text-gray-800" href="">David Martinez</a>
            <time>06-12-2023</time>
          </p>
          <p className="text-left">
            Click the button to listen on Spotiwhy app.
          </p>
          <div className="card-actions justify-start">
            <button className=" w-full btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
