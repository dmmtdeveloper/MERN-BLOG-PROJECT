import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { currentUser } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const { name, password } = user;

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content mx-auto flex-col items-center lg:flex-row-reverse">
          <div className="flex max-w-sm flex-col text-center lg:text-left">
            <h1 className="text-5xl font-bold">Profile</h1>
            <p className="py-6">
              Únete a nosotros en esta emocionante travesía fotográfica y
              personaliza tu experiencia cambiando tu nombre en el blog. ¡Nos
              vemos pronto! 📸✨
            </p>
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-w-16 mt-2 w-16 cursor-pointer self-center rounded-full"
            />
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleChange}
                  value={name}
                  type="text"
                  id="name"
                  placeholder="username"
                  className="input input-bordered"
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
                  id="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6 gap-2">
                <button className="btn btn-primary">UPDATE</button>
              </div>
            <div className="flex justify-between ">
                <span className="text-sm cursor-pointer">Delete account</span>
                <span className="text-sm cursor-pointer">Signout</span>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
