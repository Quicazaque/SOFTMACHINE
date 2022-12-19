import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import alquilerRouter from "./router/Aquiler.routers.js";
import inventarioRouter from "./router/Inventario.routers.js";
import userRouter from "./router/User.routers.js";
import loginRouter from "./controllers/loginController.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("El servidor se esta ejecutando");
});

mongoose.set('strictQuery', false)

mongoose.connect(
  "mongodb+srv://SOFTMACHINE:SOFTMACHINE123@softmachine.noggtnk.mongodb.net/Softmachine?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("La base de datos esta conectada.");
    }
  }
);

//Mydleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
  }));
app.use(alquilerRouter);
app.use("/inventario", inventarioRouter);
app.use("/", userRouter);
app.use("/login", loginRouter);
