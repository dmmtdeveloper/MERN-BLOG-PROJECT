//importar dependencias
import express from "express";
import mongodbConfig from "./config/mongodbConfig.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser'
// import cors from 'cors'

//iniciar env variables
import dotenv from "dotenv";
dotenv.config();

//create an express app
const app = express();

//config express app
app.use(express.json());
app.use(cookieParser());
// app.use(cors({credentials:true, origin:'http://localhost:3000/'}))

//conecta a la base de datos
mongodbConfig();

//Rutas de la aplicacion
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});

//iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log("server started");
});
