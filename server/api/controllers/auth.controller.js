import User from "../models/auth.models.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../middleware/errorHandle.js";
import jwt from "jsonwebtoken";

//REGISTER
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

//LOGIN
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Este email no registrado"));

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Contraseña incorrecta"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //ocultar contraseña 
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); //1 hora
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};


export const google = async (req, res, next) => {
  try {
    //autenticando usuario existente
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hora
      res.cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      });
      res.status(200).json(rest);
    } else {

      //creando una contraseña random por si el usuario la quiere cmabiar 
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      //encriptado de password
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

      const name =
        req.body.name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-8);

      const newUser = new User({
        name,
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hora
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};




export const signout = async (req, res) => {
  res.clearCookie("access_token").status(200).json("Signout success");
};