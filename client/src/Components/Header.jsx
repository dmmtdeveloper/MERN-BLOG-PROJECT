import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <main className=" ">
      <header className="mb-24 flex justify-between">
        <Link className="font-bold" to="/">
          MyBlog
        </Link>

        <nav className=" flex gap-4 ">
          <Link className="hover:underline" to="/">
            Home
          </Link>

          <Link className="hover:underline " to="/register">
            Register
          </Link>

          <Link className="hover:underline " to="/profile">
            {currentUser ? <p>{currentUser.name}</p> : <li>login</li>}
          </Link>
        </nav>
      </header>
    </main>
  );
}
