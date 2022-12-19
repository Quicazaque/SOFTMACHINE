import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";

export default async function login(req, res) {
  try {
    const {
      nombre,
      tipo_de_documento,
      documento,
      edad,
      numeroTelefonico,
      ubicacion,
      correo,
      password,
    } = res.body;
    

    const document = await UserModel.findOne({
      nombre,
      tipo_de_documento,
      documento,
      edad,
      numeroTelefonico,
      ubicacion,
      correo,
    });
    /** 
        const documentTipo_de_documento = await UserModel.findOne({"tipo_de_documento": tipo_de_documento})
        const documentDocumento = await UserModel.findOne({"documento": documento})
        const documentedad = await UserModel.findOne({"edad": edad})
        const documentedadNumeroTelefonico = await UserModel.findOne({"numeroTelefonico": numeroTelefonico})
        const documentUbicacion = await UserModel.findOne({"ubicacion": ubicacion})
        const documentCorreo = await UserModel.findOne({"correo": correo})
*/

    if (document != null) {
      const documentpassword = document?.password;
      const access = await bcrypt.compare(password, documentpassword);

      if (access) {
        res.json({ message: "Bienvenido" });
      } else {
        res.sendStatus(401);
      }
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}
