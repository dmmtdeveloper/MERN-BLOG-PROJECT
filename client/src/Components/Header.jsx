import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <main className=" ">
      <header className="mb-24 flex justify-between">
        <Link className="text-2xl font-bold" to="/">
          MyBlog📷
        </Link>

        <nav className=" flex gap-4 ">
          <Link className="font-normal hover:underline" to="/">
            Home
          </Link>

          <Link className="font-normal hover:underline" to="/create">
            Created
          </Link>

          <Link className="font-normal hover:underline" to="/register">
            Register
          </Link>

          <Link className="font-normal hover:underline " to="/profile">
            {currentUser ? (
              <img className="h-7 w-7 rounded-full object-cover" src={currentUser.profilePicture}></img>
            ) : (
              <p>Login</p>
            )}
          </Link>
        </nav>
      </header>
    </main>
  );
}
