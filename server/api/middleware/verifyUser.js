import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

// Verificar la autenticación del usuario
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.Authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Acceso no autorizado. Token no proporcionado." });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    //check expiration
    if (Data.now() > decoded.exp)
      return res.status(401).json({ message: "Acceso expirado" });

    const user = await User.findById(decoded.sub);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Acceso no autorizado. Usuario no encontrado." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Acceso no autorizado. Token no válido." });
  }
};
