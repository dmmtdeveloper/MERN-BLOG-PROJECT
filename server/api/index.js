import express from "express";
import dotenv from "dotenv";
import mongodbConfig from "./config/mongodbConfig.js";
import userRoutes from './routes/user.routes.js'
dotenv.config();
mongodbConfig();

const app = express();

app.use(express.json());

//Rutas de la aplicacion
app.use("api/user", userRoutes)

app.listen(3000, () => {
  console.log("server started on port 3000");
});
