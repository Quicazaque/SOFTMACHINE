import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt"


dotenv.config();

const privatekey = process.env.PRIVATE_KEY;

export function genToken(element) {
  
  return jwt.sign(element, privatekey);
  
}

export async function login(req, res) {
  try {
    const { nombre, password } = req.headers;

    console.log(nombre);
    console.log(password);

    const document = await UserModel.findOne({ nombre: nombre });

    if (!document) return res.sendStatus(401);

    if (await bcrypt.compare(password, document.password)) {
      const token = genToken({ _id: document._id });

      return res.status(200).json({token});
    }

    res.sendStatus(401);
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error.message);
  }
}
