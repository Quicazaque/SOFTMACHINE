import express from "express"
import { createMaquina, deleteMaquina, readMaquina, updateMaquina } from "../controllers/MaquinaController.js"

const maquinaRouter = express.Router()

//localhots:3000/inventario

maquinaRouter.get("/",(req,res) => {
    res.send("Inventario")
})

//CRUD
//CREAR/ POST
maquinaRouter.post("/", (req,res) =>{
    createMaquina(req, res)
})

//LEER: GET
maquinaRouter.get("/:id", (req,res) => {
    readMaquina(req, res)
})

//ACTUALIZAR
maquinaRouter.patch("/:id", (req,res) => {
    updateMaquina(req,res)
})

//Borrar
maquinaRouter.delete("/", (req,res) => {
    deleteMaquina(req, res)
})

/** router.get("/maquinas",(req,res) => {
    res.json(Maquinas)
}) /** 


router.get("/:maquinas", (req, res)=> {
   let usuario =req.params.usuario
   res.redirect("Alquiler")
})
*/
export default maquinaRouter;