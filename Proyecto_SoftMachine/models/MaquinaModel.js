import mongoose from "mongoose";

const MaquinaModel = mongoose.Schema({
    "maquina":    {type:String, required:true},
    "inventario": {type:String, required:true},
    "precio":     {type:Number, required:true}
})
export default mongoose.model("Maquinas", MaquinaModel);