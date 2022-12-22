import express from "express"
import { createMaquina, deleteMaquina, readMaquina, updateMaquina, MaquinasList } from "../controllers/MaquinaController.js"

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
//LEER LISTA DE MAQUINAS /inventario/list
maquinaRouter.get("/list",MaquinasList )
//maquinaRouter.get("/:name",MaquinasList )


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
export default maquinaRouter;