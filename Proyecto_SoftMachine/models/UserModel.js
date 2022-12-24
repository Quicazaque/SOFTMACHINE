import mongoose from "mongoose";

function validatorEdad(numero) {
  if (numero >= 18) {
    return true;
  } else {
    return false;
  }
}

const UserModelRegistro = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo_de_documento: { type: String, required: true },
  documento: { type: Number, required: true },
  edad: {
    type: Number,
    required: true,
    validate: {
      validator: validatorEdad,
      message: "Tiene que ser mayor de edad",
    }},
  numeroTelefonico: { type: Number, required: true },
  ubicacion: { type: String, required: true },
  correo: { type: String, unique: true },
  password: { type: String, required: true },
});
export default mongoose.model("users", UserModelRegistro);
