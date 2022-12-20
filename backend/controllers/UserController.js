import userModelRegistro from "../models/UserModel.js";
import bcrypt from "bcrypt";

//CRUD
//CREATE
export async function createUser(req, res) {
  const usuario = req.body.usuario;
  const { password } = usuario;

  const encriptedPassword = await bcrypt.hash(password, 10);
  usuario.password = encriptedPassword;

  let documentoUser;

  if (usuario == null) {
    res.status(400).json({
      error: "Falta el objeto 'usuario'.",
    });
    return;
  }

  try {
    documentoUser = await userModelRegistro.create(usuario);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(201).json(documentoUser);
}

//READ
export async function readUser(req, res) {
  const correo = req.params.correo;

  let documento;

  try {
    documento = await userModelRegistro.findOne({ correo });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

//UPDATE
export async function updateUser(req, res) {
  const correo = req.params.correo;
  const updates = req.body.updates;
  //const {field, value} = updates

  let documento = null;

  try {
    documento = await userModelRegistro.findOne({ correo }, updates, {
      runValidators: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  //documento[field] = value
  //documento.save()
  res.status(200).json(documento);
}
//DELETE
export async function deleteUser(req, res) {
  const correo = req.body.correo;

  let documento = null;

  try {
    documento = await userModelRegistro.deleteOne({ correo });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}
