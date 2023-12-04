import { Link } from "react-router-dom";

export default function Header() {
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
          <Link className="hover:underline" to="">
            About
          </Link>
          <Link className="hover:underline " to="/register">
            Register
          </Link>


        </nav>
      </header>
    </main>
  );
}
