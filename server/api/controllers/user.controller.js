import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { email, password, name} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const result = await User.create({ email, name, password: hashedPassword });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401);

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) return res.status(401);

  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  var token = jwt.sign({ user: user._id, exp }, process.env.SECRET);

  res.cookie("Authorization", token, {
    expires: new Date(exp),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Usuario logeado" });
};



export const checkAuth = (req, res) => {
  try {
    res.status(200);
  } catch (error) {
    return res.status(400);
  }
};



export const logout = async (req, res, next) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "sesion cerrada" });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
