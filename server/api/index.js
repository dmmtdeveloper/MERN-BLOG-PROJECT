//importar dependencias
import express from "express";
import mongodbConfig from "./config/mongodbConfig.js";
import userRoutes from "./routes/user.routes.js";

//iniciar env variables
import dotenv from "dotenv";
dotenv.config();

//create an express app
const app = express();

//config express app
app.use(express.json());

//conecta a la base de datos
mongodbConfig();

//Rutas de la aplicacion
app.use("/api/user", userRoutes);

//iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log("server started");
});
