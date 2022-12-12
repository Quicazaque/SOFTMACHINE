import express from "express"
//import UserModel from "../models/UserModel";
import { createUser,deleteUser, readUser, updateUser } from "../controllers/userController.js"

const UserRouter= express.Router()

//  localhots:3000/
UserRouter.get("/",(req, res) => {
    res.send("Inicio de pagina")
})

//CRUD
//CREAR/ POST
UserRouter.post("/", (req,res) => {
    createUser(req, res)
})

//LEER: GET
UserRouter.get("/:correo", (req,res) => {
    readUser(req, res)
})

//ACTUALIZAR
UserRouter.patch("/:correo", (req,res) => {
    updateUser(req,res)
})

//Borrar
UserRouter.delete("/", (req,res) => {
    deleteUser(req, res)
})

export default UserRouter;