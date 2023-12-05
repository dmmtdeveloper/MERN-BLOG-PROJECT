import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../redux/user/userSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [imagePercent, setImagePercent] = useState(0);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //ACTUALIZR DATOS
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  //ELIMINAR CUENTA
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${currentUser.profilePicture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content mx-auto flex-col items-center lg:flex-row-reverse">
          <div className="flex max-w-sm flex-col text-center lg:text-left">
            <h1 className="text-5xl font-bold">Profile</h1>
            <p className="py-6">
              Personaliza tu experiencia cambiando tu nombre y agregando tu
              propia foto de perfil al blog. ¡Te esperamos en esta emocionante
              travesía fotográfica! 📸✨
            </p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
              />
              <img
                onClick={() => fileRef.current.click()}
                src={formData.profilePicture || currentUser.profilePicture}
                alt="profile"
                className=" h-24 w-24 cursor-pointer  self-center rounded-full border-2 object-cover"
              />

              <p className="self-center text-sm">
                {imageError ? (
                  <span className="text-red-700">
                    Error uploading image(file size less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span className="text-green-700">
                    Image upload successfully
                  </span>
                ) : (
                  ""
                )}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  defaultValue={currentUser.name}
                  type="text"
                  id="name"
                  placeholder="username"
                  className="input input-bordered"
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered"
                  autoComplete={currentUser.password}
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6 gap-2">
                <button className="btn btn-primary">UPDATE</button>
              </div>
              <div className="flex justify-between ">
                <span
                  onClick={handleDeleteAccount}
                  className="cursor-pointer text-sm text-red-500"
                >
                  Detele account
                </span>
                <span
                  onClick={handleSignOut}
                  className="cursor-pointer text-sm text-red-500"
                >
                  Sign out
                </span>
              </div>
              <p className="mt-5 text-sm text-green-700">
                {updateSuccess && "User is updated successfully!"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
