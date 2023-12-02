import mongoose from "mongoose";

const mongodbConfig = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Server connect to mongodb");
    })
    .catch((e) => {
      console.log(`hubo un error ${e}`);
    });
};
export default mongodbConfig;
