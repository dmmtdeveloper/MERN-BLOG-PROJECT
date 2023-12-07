import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandle.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Error verifying token:", err);
      return next(errorHandler(403, "Token is not valid"));
    }

    console.log("Decoded Token:", user);
    req.user = user; // Esta línea asigna el objeto del usuario a req.user
    next();
  });
};
