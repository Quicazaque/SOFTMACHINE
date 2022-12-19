import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";

export default async function login(req, res) {
  try {
    const { nombre, password } = req.headers;
    const document = await UserModel.findOne({ nombre: nombre });

    if (document != null) {
      const documentpassword = document?.password;
      const access = await bcrypt.compare(password, documentpassword);

      if (access) {
        res.status(200);
        res.json({ message: "Bienvenido" });
      } else {
        res.sendStatus(401);
      }
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}
