import mongoose from "mongoose";

const UserModelRegistro = mongoose.Schema({
    "nombre":           {type:String, required:true},
    "tipo_de_documento":{type:String, required:true},
    "documento":        {type:Number, required:true},
    "edad":             {type:Number, required:true,} /**  min :18, max: 130}*/,
    "numeroTelefonico": {type:Number, required:true},
    "ubicacion":        {type:String, required:true},
    "correo":           {type:String, required:true},
    "contraseña":       {type:String, required:true},
})
export default mongoose.model("users", UserModelRegistro);
