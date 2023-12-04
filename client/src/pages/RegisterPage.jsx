import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonGoogle from "../Components/ButtonGoogle";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.sucess === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-sm text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Regístrate para explorar, comentar y compartir tu pasión por la
              fotografía. Únete a nosotros en esta emocionante travesía
              fotográfica. ¡Nos vemos pronto! 📸✨
            </p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={handleChange}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  id="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  id="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  id="password"
                  required
                />
                <label className="label">
                  <Link
                    to="/login"
                    className="link-hover link label-text-alt text-blue-400"
                  >
                    Have an account??
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6 gap-2">
                <button disabled={loading} className="btn btn-primary">
                  {loading ? "Loading..." : "Register"}
                </button>
                <ButtonGoogle/>
                {error && (
                  <p className="p-1 text-left text-sm text-red-400">{error}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
