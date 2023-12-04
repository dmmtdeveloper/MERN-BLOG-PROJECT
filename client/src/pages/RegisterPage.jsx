import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate()
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
    
   const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if(response.status === 200){
      alert('registration successful')
    } else{
      alert('registration failed')
      return
    }
    navigate("/login");
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-sm text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
             Regístrate para explorar,
              comentar y compartir tu pasión por la fotografía. Únete a nosotros
              en esta emocionante travesía fotográfica. ¡Nos vemos pronto! 📸✨
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  <Link to="/login" className="text-blue-400 label-text-alt link link-hover">
                    Have an account??
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
