import mongoose from "mongoose";

const mongodbConfig = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Server connect");
    })
    .catch((e) => {
      console.log(`hubo un error ${e}`);
    });
};
export default mongodbConfig;
