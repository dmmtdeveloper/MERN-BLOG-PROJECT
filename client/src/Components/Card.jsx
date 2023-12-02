export default function Card() {
  return (
    <div className="md: max-w-lg ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className=" card-title text-left">New album is released!</h2>
          <p className="text-left">
            Click the button to listen on Spotiwhy app.
          </p>
          <div className="card-actions justify-start">
            <button className=" btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
