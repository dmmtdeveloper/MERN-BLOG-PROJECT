import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <main className=" ">
      <header className="mb-24 flex justify-between">
        <Link className="font-bold text-3xl" to="/">
          📷
        </Link>

        <nav className=" flex gap-4 ">
          <Link className="font-medium hover:underline" to="/">
            Home
          </Link>

          <Link className="font-medium hover:underline" to="/login">
            Login
          </Link>
          
          <Link className="font-medium hover:underline" to="/create">
            new post
          </Link>

          <Link className="font-medium hover:underline " to="/profile">
            {currentUser ? <p>{currentUser.name}</p> : <p>Login</p>}
          </Link>
        </nav>
      </header>
    </main>
  );
}
