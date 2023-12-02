import { Link } from "react-router-dom";

export default function Header() {
  return (
    <main className=" ">
      <header className="mb-24 flex justify-between">
        <Link to="/">
          <a href="" className="font-bold">
            MyBlog
          </a>
        </Link>
        <nav className=" flex gap-4 ">
          <Link to="/">
            <a href="" className="hover:underline">
              Home
            </a>
          </Link>
          <Link to="/login">
            <a href="" className="hover:underline">
              Login
            </a>
          </Link>

          <Link to="/register">
            <a href="" className="hover:underline ">
              Register
            </a>
          </Link>
        </nav>
      </header>
    </main>
  );
}
