import {format} from 'date-fns'

export default function Card({ title, summary, cover, content, createdAt }) {
  
  return (
    <div className="card glass w-96">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-left">{format(new Date(createdAt), "dd-MM-yyy")}</p>
        <p className="text-left">{summary}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
}
  
